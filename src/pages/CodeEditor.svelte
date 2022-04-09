<script>
  import Editor from '../components/Editor.svelte';

  let htmlText = '<h1>Hello World</h1>';
  let javascriptText = '';
  let styleText = `h1 { \n font-size: 2rem; \n color: red; \n}`;

  const handleHtmlKeyUp = (event) => htmlText = event.target.value
  const handleCssKeyUp = (event) => styleText = event.target.value;
  const handleJsKeyUp = (event) => javascriptText = event.target.value;

  const buildIframe = (style, html, js) => {
    return `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body>
            <style>${style}</style>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
    `;
  }

  $: iframeSrc = buildIframe(styleText, htmlText, javascriptText);
</script>

<svelte:head>
  <title>HTML and CSS</title>
</svelte:head>

<article>
  <section>
    <div class="code-section first">
      <h3>HTML</h3>
      <Editor languageType='html' onKeyUp={handleHtmlKeyUp} defaultValue={htmlText}/>
    </div>
    
    <div class="code-section">
      <h3>CSS</h3>
      <Editor languageType='css' onKeyUp={handleCssKeyUp} defaultValue={styleText}/>
    </div>
    
    <div class="code-section last">
      <h3>Javascript</h3>
      <Editor languageType='javascript' onKeyUp={handleJsKeyUp}/>
    </div>
  </section>
  <section>
    <iframe title="Code Result" frameborder=0 allowtransparency={true} scrolling='yes' srcdoc={iframeSrc}></iframe>
  </section>
</article>

<style>
  .code-section { 
    background-color: #EEE;
    padding: 10px 5px;
    display: flex;
    flex-flow: column;
    flex: 1;
    align-items: center;
  }

  .code-section.last {
    border-top-right-radius: 5px;
  }

  .code-section.first {
    border-top-left-radius: 5px;
  }

  article {
    width: 100%;
  }

  section {
    display: flex;
    width: 100%;
  }

  iframe {
    border: 1px solid black;
    width: 100%;
    min-height: 50vh;
    border-radius: 0 0 5px 5px;
  }
</style>