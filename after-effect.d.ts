declare class File {
  constructor(path: string);
}

type Bounds = [number, number, number, number];

declare class ScriptUIGraphics {
  backgroundColor: unknown;
  disabledBackgroundColor: unknown;
  disabledForegroundColor: unknown;
  font: unknown;
  foregroundColor: unknown;
  BrushType: unknown;
  currentPath: unknown;
  currentPoint: unknown;
  PenType: unknown;
}

declare class AutoLayoutManager {
  layout(unknown: boolean): void;
  resize(): void;
}

declare class Window {
  constructor(
    kind: stirng,
    title: string,
    unknown?: unknown,
    options?: { resizeable?: boolean; closeButton?: boolean },
  );
  add(
    kind: string,
    bounds: Bounds,
    text: strin,
    options?: { name?: string; multiline?: boolean; readonly: boolean },
  ): Window;
  bounds: Bounds;
  show(): void;
  center(): void;
  graphics: ScriptUIGraphics;
  visible: boolean;
  frameBounds: unknown;
  frameLocation: unknown;
  frameSize: unknown;
  location: unknown;
  maximumSize: unknown;
  minimumSize: unknown;
  preferredSize: unknown;
  size: unknown;
  windowBounds: unknown;
  characters: unknown;
  justify: unknown;
  text: string;
  active: boolean;
  shortcutKey: unknown;
  cancelElement: unknown;
  defaultElement: unknown;
  maximized: unknown;
  minimized: unknown;
  opacity: number;
  alignChildren: Array<string>;
  children: unknown;
  layout: AutoLayoutManager;
  margins: number;
  orientation: string;
  spacing: number;
  alignment: unknown;
  properties: unknown;
  enabled: unknown;
  helpTip: unknown;
  indent: unknown;
  parent: Window | null;
  textDirection: unknown;
  window: Window;
  type: unknown;
  onResize?: () => void;
  onChanging?: () => void;
  onResizing?: () => void;
}

declare class Item {
  name: string;
}

declare class FootageItem extends Item {
  addGuide: unknown;
  comment: unknown;
  duration: unknown;
  dynamicLinkGUID: unknown;
  file: unknown;
  footageMissing: unknown;
  frameDuration: unknown;
  frameRate: unknown;
  getRenderGUID: unknown;
  guides: unknown;
  hasAudio: unknown;
  hasVideo: unknown;
  height: unknown;
  id: unknown;
  isMediaReplacementCompatible: unknown;
  label: unknown;
  mainSource: unknown;
  openInViewer: unknown;
  parentFolder: unknown;
  pixelAspect: unknown;
  proxySource: unknown;
  remove: unknown;
  removeGuide: unknown;
  replace(file: File): void;
  replaceWithPlaceholder: unknown;
  replaceWithSequence: unknown;
  replaceWithSolid: unknown;
  selected: unknown;
  setGuide: unknown;
  setProxy: unknown;
  setProxyToNone: unknown;
  setProxyWithPlaceholder: unknown;
  setProxyWithSequence: unknown;
  setProxyWithSolid: unknown;
  time: unknown;
  typeName: unknown;
  useProxy: unknown;
  usedIn: unknown;
  width: unknown;
}

declare class CompItem extends Item {
  activeCamera: unknown;
  addGuide: unknown;
  applyPreset: unknown;
  bgColor: unknown;
  comment: unknown;
  counters: unknown;
  displayStartFrame: unknown;
  displayStartTime: unknown;
  doContentAwareFill: unknown;
  draft3d: unknown;
  dropFrame: unknown;
  duplicate: unknown;
  duration: unknown;
  dynamicLinkGUID: unknown;
  exportAsMotionGraphicsTemplate: unknown;
  footageMissing: unknown;
  frameBlending: unknown;
  frameDuration: unknown;
  frameRate: unknown;
  getMotionGraphicsTemplateControllerName: unknown;
  getRenderGUID: unknown;
  guides: unknown;
  hasAudio: unknown;
  hasVideo: unknown;
  height: unknown;
  hideShyLayers: unknown;
  id: unknown;
  isMediaReplacementCompatible: unknown;
  label: unknown;
  layer: unknown;
  layers: unknown;
  markerProperty: unknown;
  motionBlur: unknown;
  motionBlurAdaptiveSampleLimit: unknown;
  motionBlurSamplesPerFrame: unknown;
  motionGraphicsTemplateControllerCount: unknown;
  motionGraphicsTemplateName: unknown;
  numLayers: unknown;
  openInEssentialGraphics: unknown;
  openInViewer: unknown;
  parentFolder: unknown;
  pixelAspect: unknown;
  preserveNestedFrameRate: unknown;
  preserveNestedResolution: unknown;
  proxySource: unknown;
  ramPreviewTest: unknown;
  remove: unknown;
  removeGuide: unknown;
  renderFrame: unknown;
  renderer: unknown;
  renderers: unknown;
  resolutionFactor: unknown;
  saveDraftFrameToPng: unknown;
  saveFrameToPng(frame: number, file: File);
  selected: unknown;
  selectedLayers: unknown;
  selectedProperties: unknown;
  setGuide: unknown;
  setMotionGraphicsControllerName: unknown;
  setProxy: unknown;
  setProxyToNone: unknown;
  setProxyWithPlaceholder: unknown;
  setProxyWithSequence: unknown;
  setProxyWithSolid: unknown;
  shutterAngle: unknown;
  shutterPhase: unknown;
  time: unknown;
  typeName: unknown;
  useProxy: unknown;
  usedIn: unknown;
  width: unknown;
  workAreaDuration: unknown;
  workAreaStart: unknown;
}

declare interface ItemCollectionBase {
  readonly length: number;
  [index: number]: Item;
}

declare interface ItemCollection extends ItemCollectionBase {
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
  readonly buildName: string;
  readonly buildNumber: number;
  cancelTask: unknown;
  cancelTimeout: unknown;
  ccUserGuid: unknown;
  disableRendering: boolean;
  dispatchCEPEvent: unknown;
  download: unknown;
  effects: unknown;
  endSuppressDialogs: unknown;
  endUndoGroup: unknown;
  endWatchFolder: unknown;
  executeCommand: unknown;
  exitAfterLaunchAndEval: unknown;
  exitCode: number;
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
  readonly memoryInUse: number;
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
  scheduleTask(stringToExecute: string, milliseconds: number, repeat: boolean);
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

declare class Helper {
  sleep(milliseconds: number): void;
  error: unknown;
  version: unknown;
  build: unknown;
  buildDate: unknown;
  global: unknown;
  stack: unknown;
  level: unknown;
  flags: unknown;
  strict: unknown;
  locale: unknown;
  localize: unknown;
  decimalPoint: unknown;
  memCache: unknown;
  appEncoding: unknown;
  screens: unknown;
  os: unknown;
  fileName: unknown;
  line: unknown;
  hiresTimer: unknown;
  dictionary: unknown;
  engineName: unknown;
  includePath: unknown;
  _ADBE_LIBS_CORE: unknown;
  _ADBE_LIBS_AEFT: unknown;
}

declare var app: App;
declare var $: Helper;

declare function alert(o: unknown): void;
