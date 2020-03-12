import * as React from 'react';

class Edit extends React.Component<EditProps, EditState> {
  constructor(props: EditProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Edit Page</h1>
      </div>
    );
  }
}

export interface EditProps {}
export interface EditState {}
export default Edit;
