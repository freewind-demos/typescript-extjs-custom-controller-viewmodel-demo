Ext.onReady(() => {
    new Ext.app.Application({
        name: 'hello',
        mainView: new Ext.button.Button({
            renderTo: 'main',
            height: 100,
            width: 200,
            bind: {
                text: 'Hello, {buttonText}'
            },
            viewModel: new Ext.app.ViewModel({
                data: {
                    buttonText: 'button'
                }
            }),
            controller: new Ext.app.ViewController({
                changeText: function () {
                    const viewModel = this.getViewModel()
                    viewModel.set('buttonText', 'new button');
                }
            }),
            listeners: {
                click: function () {
                    const controller = this.getController()
                    controller.changeText();
                },
            },
        }),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
