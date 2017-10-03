import ModelsLibrary from 'models';

const Models = new ModelsLibrary({
  middleware: [
    ModelsLibrary.middleware.immutable,
    ModelsLibrary.middleware.events
  ]
});

export default Models;