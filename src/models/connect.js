import React, { Component } from 'react';

export default function connect(models, Child) {
  return class ModelsHoc extends Component {
    constructor(props) {
      super(props);

      this.listeners = [];

      this.state = {
        ...this.modelsData
      };
    }

    get models() {
      return Object.keys(models)
        .filter(key => models[key] && models[key].constructor.isModel)
        .map(key => ({ key: key, model: models[key] }));
    }

    get modelsData() {
      const data = {};

      this.models.forEach(obj => (data[obj.key] = obj.model.toJSON()));

      return data;
    }

    componentWillMount() {
      this.listeners = [];

      this.models.map(obj =>
        this.listeners.push(
          obj.model.addListener('change', data =>
            this.setState({ [obj.key]: data })
          )
        )
      );
    }

    componentWillUnmount() {
      this.listeners.forEach(listener => listener.remove());
    }

    render() {
      return <Child {...this.state} {...this.props} />;
    }
  };
}
