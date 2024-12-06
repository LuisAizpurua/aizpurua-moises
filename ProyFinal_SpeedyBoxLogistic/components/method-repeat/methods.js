export const addList = (links, ul) => {
    for (let value in links) {
      const {li, a} = {li: document.createElement("li"), a: document.createElement("a")};
   
      a.setAttribute("href", links[value]);
      a.textContent = value;
  
      li.appendChild(a);
      ul.appendChild(li);
    }
  };


export const generateSection = (titleSection) => {
  const section = document.createElement("section");
  const { div, div2 } = {div: document.createElement("div"),div2: document.createElement("div"),};

  section.append(div, div2);
  section.className = titleSection;

  return { section, div, div2 };
};  

export const addTag = (nametag, attributes) => {
  const tag = document.createElement(nametag);

  if (nametag == "link") tag.getAttribute("rel") ?? (attributes["rel"] = "stylesheet");

  for (let att in attributes) {
    tag.setAttribute(att, `${attributes[att]}`);
  }

  return tag;
};