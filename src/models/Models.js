import ModelsLibrary from 'models';

export default new ModelsLibrary({
  middleware: [
    ModelsLibrary.middleware.validation,
    ModelsLibrary.middleware.immutable,
    ModelsLibrary.middleware.events
  ]
});