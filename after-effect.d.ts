declare class File {
  constructor(dirname: string);
}

declare class Item {
  name: string;
}

declare class CompItem extends Item {}

declare class ItemCollection extends Array {
  addComp: unknown;
  addFolder: unknown;
}

declare class Project {
  activeItem: unknown;
  autoFixExpressions: unknown;
  bitsPerChannel: unknown;
  close: unknown;
  closeTeamProject: unknown;
  compensateForSceneReferredProfiles: unknown;
  consolidateFootage: unknown;
  convertTeamProjectToProject: unknown;
  createComp: unknown;
  dirty: unknown;
  displayStartFrame: unknown;
  expressionEngine: unknown;
  feetFramesFilmType: unknown;
  file: unknown;
  footageTimecodeDisplayStartType: unknown;
  framesCountType: unknown;
  framesUseFeetFrames: unknown;
  getTeamProjectsCCXShareSheetDataAsJSON: unknown;
  gpuAccelType: unknown;
  importFile: unknown;
  importFileWithDialog: unknown;
  importPlaceholder: unknown;
  isAnyTeamProjectOpen: unknown;
  isLoggedInToTeamProject: unknown;
  isResolveCommandEnabled: unknown;
  isShareCommandEnabled: unknown;
  isSyncCommandEnabled: unknown;
  isTeamProjectEnabled: unknown;
  isTeamProjectOpen: unknown;
  item: unknown;
  itemByID: unknown;
  items: ItemCollection;
  layerByID: unknown;
  linearBlending: unknown;
  linearizeWorkingSpace: unknown;
  listColorProfiles: unknown;
  listTeamProjects: unknown;
  lutInterpolationMethod: unknown;
  newTeamProject: unknown;
  numItems: unknown;
  openTeamProject: unknown;
  placeAsset: unknown;
  reduceProject: unknown;
  removeUnusedFootage: unknown;
  renderQueue: unknown;
  resolveConflict: unknown;
  revision: unknown;
  rootFolder: unknown;
  save: unknown;
  saveWithDialog: unknown;
  selection: unknown;
  serializeToXML: unknown;
  setDefaultImportFolder: unknown;
  shareTeamProject: unknown;
  showWindow: unknown;
  syncTeamProject: unknown;
  timeDisplayType: unknown;
  toolType: unknown;
  transparencyGridThumbnails: unknown;
  workingGamma: unknown;
  workingSpace: unknown;
  xmpPacket;
}

declare class App {
  activate: unknown;
  activeViewer: unknown;
  appName: unknown;
  areToolTipsEnabled: unknown;
  availableGPUAccelTypes: unknown;
  beginSuppressDialogs: unknown;
  beginUndoGroup: unknown;
  buildName: unknown;
  buildNumber: unknown;
  cancelTask: unknown;
  cancelTimeout: unknown;
  ccUserGuid: unknown;
  disableRendering: unknown;
  dispatchCEPEvent: unknown;
  download: unknown;
  effects: unknown;
  endSuppressDialogs: unknown;
  endUndoGroup: unknown;
  endWatchFolder: unknown;
  executeCommand: unknown;
  exitAfterLaunchAndEval: unknown;
  exitCode: unknown;
  findMenuCommandId: unknown;
  getCCXUserJSONData: unknown;
  getDebugDatabase: unknown;
  getenv: unknown;
  hasDebugDatabaseValue: unknown;
  injectPresetAnimation: unknown;
  isAnalyticsEnabled: unknown;
  isBeta: unknown;
  isProfessionalVersion: unknown;
  isRenderEngine: unknown;
  isStagingEnvironment: unknown;
  isUISuppressed: unknown;
  isWatchFolder: unknown;
  isoLanguage: unknown;
  language: unknown;
  learnPanelContentDirPath: unknown;
  log: unknown;
  memoryInUse: unknown;
  newProject: unknown;
  newTeamProject: unknown;
  objectToJSON: unknown;
  onCEPEvent: unknown;
  open: unknown;
  openFast: unknown;
  openTeamProject: unknown;
  openTemplate: unknown;
  parseSwatchFile: unknown;
  pauseWatchFolder: unknown;
  preferences: unknown;
  project: Project;
  purge: unknown;
  quit: unknown;
  removeDebugDatabaseEntry: unknown;
  reportErrorOnMissingFrame: unknown;
  saveProjectOnCrash: unknown;
  scheduleTask: unknown;
  setDebugDatabase: unknown;
  setExtensionPersistent: unknown;
  setMemoryUsageLimits: unknown;
  setMultiFrameRenderingConfig: unknown;
  setSavePreferencesOnQuit: unknown;
  setTimeout: unknown;
  settings: unknown;
  themeColor: unknown;
  version: unknown;
  watchFolder: unknown;
}

declare var app: App;
