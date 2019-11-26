export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  bm.add('lottie', {
    label: 'Lottie',
    category: 'Basic',
    attributes: {class:'fa fa-pencil'},
    content: {
      type: 'lottie',
      src: '',
      style:{
        
      }
    },
  });
}
