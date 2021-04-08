  class Markdown {
    constructor () {
      this.#listenEvent()
    }
    #listenEvent () {
      buttonElement.addEventListener('click', this.#handleClickTransformButton.bind(this))
    }
    #handleClickTransformButton () {
      const contentEditor = textareaElement.value
  
      const regexpH1 = /#\s(.+)\n/gim
      const regexpH2 = /##\s(.+)\n/gim
      const regexpH3 = /###\s(.+)\n/gim
      const regexpH4 = /####\s(.+)\n/gim
      const regexpStrong = /\*{2}(.+)\*{2}\n/gim
      const regexpStrike = /\~{2}(.+)\~{2}\n/gim
      const regexpLink = /\[link\](https\:\/\/(.+).com)\n/gim//исправить
      const regexpHr = /\-{3}\n/gim
      const regexpBr = /\-\|\n/gim
      const regexpSpanGreen = /\[\*{2}(.+)\*{2}\]\n/gim
      const regexpSpanRed = /\[\-{2}(.+)\-{2}\]\n/gim

      const result = contentEditor
      .replace(regexpH4, '<h4>$1</h4>')
      .replace(regexpH3, '<h3>$1</h3>')
      .replace(regexpH2, '<h2>$1</h2>')
      .replace(regexpH1, '<h1>$1</h1>')
      .replace(regexpStrong, '<strong>$1</strong>')
      .replace(regexpStrike, '<strike>$1</strike>')
      .replace(regexpLink, '<a href="https://$1&quot; target="_blank" rel="noopener">link</a>')//исправить
      .replace(regexpHr, '<hr>')
      .replace(regexpBr, '<br>')
      .replace(regexpSpanGreen, '<span class="text-success">$1</span>')
      .replace(regexpSpanRed, '<span class="text-danger">$1</span>')

      outputElement.innerHTML = result
    }
  }

  new Markdown()
