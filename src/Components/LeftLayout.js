import React, { Component } from "react";
import "./LeftLayout.css";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Container from "./Container";

const SortableItem = sortableElement(({ value }) => (
  <Container>{value}</Container>
));
const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

class LeftLayout extends Component {
  state = {
    items: this.props.widgets.filter(el => el.left)
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };
  render() {
    const { items } = this.state;
    return (
      <div className="LeftLayout">
        <SortableContainer onSortEnd={this.onSortEnd}>
          {items.map((value, index) => (
            <SortableItem
              key={`item-${value.name}`}
              index={index}
              value={value.name}
            />
          ))}
        </SortableContainer>
      </div>
    );
  }
}

export default LeftLayout;
