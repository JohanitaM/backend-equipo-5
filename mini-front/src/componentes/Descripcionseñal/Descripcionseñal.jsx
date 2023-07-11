import React from 'react'

const Descripcionseñal = () => {

    const textarea = document.getElementById('myTextarea');
    const counter = document.getElementById('charCount');

    textarea.addEventListener('input', function() {
      const textLength = textarea.value.length;
      counter.textContent = textLength + ' caracteres';
    });
    
  return (
    <div>
        <textarea id="myTextarea" rows="4" cols="50" maxlength="100"></textarea>
        <div class="counter" id="charCount">0 caracteres</div>
    </div>
  )
}

export default Descripcionseñal