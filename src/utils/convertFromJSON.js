export const paragraphBlock = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <p>${payload.data.text}</p>
    </div>
  </div>
</div>
`;

export const imageBlock = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <img src="${payload.data.file.url}" alt="${payload.data.caption}" />
      <div class="text-center">
        <i>${payload.data.caption}</i>
      </div>
    </div>
  </div>
</div>
`;

export const headerBlock = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <h${payload.data.level}>${payload.data.text}</h${payload.data.level}>
    </div>
  </div>
</div>
`;

export const rawBlock = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-code">
      <code>${payload.data.html}</code>
    </div>
  </div>
</div>
`;

export const codeBlock = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-code">
      <code>${payload.data.code}</code>
    </div>
  </div>
</div>
`;

const orderedList = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <ul class="cdx-list--unordered">${payload.join('')}</ul>
    </div>
  </div>
</div>
`;

const unorderedList = payload => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <ol class="cdx-list--ordered">${payload.join('')}</ol>
    </div>
  </div>
</div>
`;

const delimeterBlock = () => `
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-delimiter cdx-block"></div>
  </div>
</div>
`;

function convertFromJSON(raw) {
  let articleHTML = '';

  raw.blocks.map((obj) => {
    switch (obj.type) {
      case 'paragraph':
        articleHTML += paragraphBlock(obj);
        break;
      case 'image':
        articleHTML += imageBlock(obj);
        break;
      case 'header':
        articleHTML += headerBlock(obj);
        break;
      case 'raw':
        articleHTML += rawBlock(obj);
        break;
      case 'code':
        articleHTML += codeBlock(obj);
        break;
      case 'list':
        if (obj.data.style === 'unordered') {
          const list = obj.data.items.map(item => `<li class="cdx-list__item">${item}</li>`);
          articleHTML += orderedList(list);
        } else {
          const list = obj.data.items.map(item => `<li class="cdx-list__item">${item}</li>`);
          articleHTML += unorderedList(list);
        }
        break;
      case 'delimeter':
        articleHTML += delimeterBlock();
        break;
      default:
        return '';
    }
  });

  return articleHTML;
}

export default convertFromJSON;
