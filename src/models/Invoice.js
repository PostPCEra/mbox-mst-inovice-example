import { types } from "mobx-state-tree";
import ItemList from "./ItemList";

import EditComp from "./EditComp";

const editComp = EditComp.create({ text : "" ,  buttonFace : "Edit", state : 1})

const Invoice = types
  .model("Invoice", {
    is_paid: false,
    currency: types.string,
    itemList: types.optional(ItemList, { items: [] }),
    editComp: types.optional(EditComp, editComp)
  })
  .actions(self => ({
    markPaid() {
      self.is_paid = true;
    }
  }))
  .views(self => ({
    status() {
      return self.is_paid ? "Paid" : "Not Paid";
    }
  }));

export default Invoice;
