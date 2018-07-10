import { types } from "mobx-state-tree";

const EditComp = types
  .model("EditComp", {
    text: types.string,
    buttonFace: types.string,
    state: types.number
  })
  .actions(self => ({
    handleClick() {
      if (self.state == 1) {
        self.buttonFace = "Save";
        self.state = 2 ;
        //self.text = val ;
      }
      else {
        self.buttonFace = "Edit";
        self.state = 1 ;
        //self.text = val ;

      }
    }
  }));

export default EditComp;
