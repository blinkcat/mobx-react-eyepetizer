class UiStore {
  public title: string = 'mobx-react-eyepetizer';
  public description: string = '';

  public setTitle = (title: string) => {
    document.title = title;
  };

  public setDescription = (description: string) => {
    (document.querySelector('meta[name="description"]') as HTMLElement).setAttribute('content', description);
  };
}

const instance = new UiStore();
export { instance as default, UiStore };
