import React, { Component } from "react";
import "./MainLayout.css";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Container from "./Container";

const SortableItem = sortableElement(({ value }) => (
  <Container>{value}</Container>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div className="grid">{children}</div>;
});

class MainLayout extends Component {
  leftTabOpenHandler = this.props.leftTabOpen;
  rightTabOpenHandler = this.props.rightTabOpen;
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
    this.props.parentCallback(this.state.items);
  };
  state = {
    items: this.props.widgets
  };
  render() {
    const { items } = this.state;
    return (
      <div className="MainLayout">
        <a href="#" className="leftArrow" onClick={this.leftTabOpenHandler}>
          ▶
        </a>
        <div className="Box">
          <SortableContainer onSortEnd={this.onSortEnd} axis="xy">
            {items.map((value, index) => (
              <SortableItem
                key={`item-${value.name}`}
                index={index}
                value={value.name}
              />
            ))}
          </SortableContainer>
        </div>
        <a href="#" className="rightArrow" onClick={this.rightTabOpenHandler}>
          ◀
        </a>
      </div>
    );
  }
}

export default MainLayout;
