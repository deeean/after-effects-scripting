export default class Console {
  private static instance: Console;

  private static stringify(value: unknown): string {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    } else {
      return value.toString();
    }
  }

  public static getInstance(): Console {
    if (!this.instance) {
      this.instance = new Console();
    }

    return this.instance;
  }

  public static println(...args: Array<unknown>) {
    this.getInstance().addText(
      args.map((it) => Console.stringify(it)).join(', ') + '\n',
    );
  }

  private dialog: Window;
  private edittext: EditText;

  constructor() {
    this.dialog = new Window('window', 'Console', undefined, {});

    this.edittext = this.dialog.add('edittext', undefined, undefined, {
      multiline: true,
      readonly: true,
      scrolling: true,
    });

    this.edittext.bounds = [0, 0, 500, 400];
    this.edittext.graphics.font = ScriptUI.newFont(
      'Liberation Mono',
      'REGULAR',
      32,
    );

    this.dialog.layout.layout(true);
    this.dialog.layout.resize();
    this.dialog.show();
  }

  addText(message: string) {
    this.edittext.text += message;
  }
}
