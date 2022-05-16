export default class Console {
  private static instance: Console;

  public static getInstance(): Console {
    if (!this.instance) {
      this.instance = new Console();
    }

    return this.instance;
  }

  public static println(message: string) {
    this.getInstance().addText(message + '\n');
  }

  private dialog: Window;
  private edittext: Window;

  constructor() {
    this.dialog = new Window('window', 'Console', undefined, {});

    this.edittext = this.dialog.add('edittext', undefined, undefined, {
      multiline: true,
      readonly: true,
    });

    this.edittext.bounds = [0, 0, 500, 400];

    this.dialog.layout.layout(true);
    this.dialog.layout.resize();
    this.dialog.show();
  }

  addText(message: string) {
    this.edittext.text += message;
  }
}
