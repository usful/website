import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

import Showable from '../../Components/Showable';
import CloseIcon from '../../Components/Icons/Close';

const defaultState = {
  email: '',
  emailValid: false,
  subject: '',
  subjectValid: false,
  message: '',
  messageValid: false,
  dirty: false,
  loading: false
};

export default class Contact extends Showable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      ...defaultState
    };
  }

  componentWillMount() {
    this.clear();
  }

  clear() {
    this.setState({
      ...defaultState
    });
  }

  update(e, field) {
    this.setState({
      [field]: e.target.value,
      dirty: false,
    });
  }

  close() {
    window.history.back();
  }

  validate() {
    const { email, message, subject } = this.state;
    const valids = {
      emailValid: true,
      subjectValid: true,
      messageValid: true,
      dirty: true
    };

    if (
      !email ||
      email.length < 2 ||
      !email.includes('@') ||
      !email.includes('.')
    ) {
      valids.emailValid = false;
    }

    if (!subject || subject.length < 2) {
      valids.subjectValid = false;
    }

    if (!message || message.length < 5) {
      valids.messageValid = false;
    }

    this.setState(valids);

    return valids.subjectValid && valids.emailValid && valids.messageValid;
  }

  async send() {
    if (!this.validate()) {
      return;
    }

    this.setState({
      loading: true
    });

    try {
      await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
    } catch (e) {
      console.log(e);
    }

    this.clear();

    this.setState({
      loading: false
    });

    this.close();
  }

  render() {
    const {
      email,
      emailValid,
      subject,
      subjectValid,
      message,
      messageValid,
      dirty
    } = this.state;

    return (
      <div
        className={cx(styles.contact, this.showableClasses(styles))}
        onClick={() => this.close()}
      >
        <section className={styles.form} onClick={e => e.stopPropagation()}>
          <h1>Write to Us</h1>
          <input
            className={cx({
              [styles.invalid]: !emailValid && dirty,
              [styles.valid]: emailValid && dirty
            })}
            type="email"
            placeholder="email"
            value={email}
            onChange={e => this.update(e, 'email')}
          />
          <input
            className={cx({
              [styles.invalid]: !subjectValid && dirty,
              [styles.valid]: subjectValid && dirty
            })}
            type="text"
            placeholder="subject"
            value={subject}
            onChange={e => this.update(e, 'subject')}
          />
          <textarea
            className={cx({
              [styles.invalid]: !messageValid && dirty,
              [styles.valid]: messageValid && dirty
            })}
            placeholder="message"
            value={message}
            onChange={e => this.update(e, 'message')}
          />
          <button disabled={this.state.loading} className={styles.button} onClick={() => this.send()}>
            Send
          </button>

          <button className={styles.closeButton} onClick={() => this.close()}>
            <CloseIcon color="black" />
          </button>
        </section>
      </div>
    );
  }
}
