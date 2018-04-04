import ModelsLibrary from 'models';

export default new ModelsLibrary({
  middleware: [
    ModelsLibrary.middleware.events,
    ModelsLibrary.middleware.immutable
  ]
});
