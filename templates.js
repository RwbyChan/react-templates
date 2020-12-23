// component.tsx
exports.component = name => `import React from 'react';
import styles from './${name}.css';

class ${name} extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  
  render(){
    // CODE


    // VIEW
    return(
      <div>${name} works!</div>
    )
  }
}
export default ${name};
`;

exports.style = name => `.${name} {}
`;

exports.service = name => `export const ${name}Service = {
};`;

exports.model = name => `export class ${name.charAt(0).toUpperCase() + name.slice(1)} {
  // PROPERTIES

  constructor() {
  }

  static fromJSON(json) {
      const rec = new ${name.charAt(0).toUpperCase() + name.slice(1)}();
      return rec;
  }

  toJSON() {
      return {
      };
  }

  // GETTERS - SETTERS
  
}
`;