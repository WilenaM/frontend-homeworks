// task1
// const divEditor = document.querySelector('.editor');

function startEditor() {
    const  divEditor = document.querySelector('div.editor');
    const textEditor = document.createElement('textarea');

    textEditor.classList.add('editor')
    textEditor.value=divEditor.innerText
    divEditor.remove()

    document.querySelector('#task1').append(textEditor);
}

function saveEditor() {
    const textEditor = document.querySelector('textarea.editor');
    const divEditor = document.createElement('div');

    divEditor.classList.add('editor')
    divEditor.innerText = textEditor.value;
    textEditor.remove()

    document.querySelector('#task1').append(divEditor);
}
//     document.addEventListener('keydown', function(event) {
//         if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//           alert('Скасувати!')
//         }
//       });
// }

function knopa(event){
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        if(document.querySelector('div.editor')) startEditor();
    } else if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        if(document.querySelector('textarea.editor')) saveEditor();
    }
}
document.addEventListener('keydown', knopa)


// task2

