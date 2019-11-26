export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const modelComponent = editor.getSelected();
  editor.DomComponents.addType('lottie', {
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'lottie-player',
        draggable: true, // Can be dropped only inside `form` elements
        droppable: false, // Can't drop other elements inside
        resizable: { ratioDefault: 1 },
        editable: 1,
        selectable: true,
        content:'',
        highlightable: true,
        fallback: 'https://assets6.lottiefiles.com/packages/lf20_zsLttw.json',
        attributes: { // Default attributes
          src: '',
          speed: '1',
          background: 'transparent',
          style:{
            width: '100px',
            height: '100px',
          },
        },
        traits: [
          'src',
          'speed',
          {
            type: 'select',
            label: 'mode',
            name: 'mode',
            value: 'normal',
            options: [
              { value: 'normal', name: 'normal' },
              { value: 'bounce', name: 'bounce' },
            ]
          },
          { type: 'checkbox', name: 'loop', value: true },
          { type: 'checkbox', name: 'controls' },
          { type: 'checkbox', name: 'autoplay', value: true},
          { type: 'checkbox', name: 'hover' },
        ],
      },
      init() {
        var attrs = this.getAttributes();
        console.log(attrs);
        if (attrs.src != ''){
          this.setAttributes({src:this.defaults.attributes.src});
        }else{
          this.setAttributes(
            {
              src:this.defaults.fallback,
              speed: '1',
              background: 'transparent',
              autoplay:'',
              loop:''
            }
          );
          console.log('new attributees', attrs);
        }
        this.set('style', this.defaults.attributes.style);
        // Listen to any attribute change
        this.on('change:attributes', this.handleAttrChange);
      },
      handleAttrChange() {
        console.log('Attributes updated: ', this.getAttributes());
      }
    },



  });
}
