import { Component } from '@angular/core';
// @ts-ignore
import { Content } from "helper-files/content-interface";

export class ContentList {
  private items: Content[] = [];

  constructor() {}

  getItems(): Content[] {
    return this.items;
  }

  add(item: Content) {
    this.items.push(item);
  }

  getCount(): number {
    return this.items.length;
  }

  getItemHtml(index: number): string {
    const item = this.items[index];
    return `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p>Created by ${item.creator}</p>
      ${item.imgURL ? `<img src="${item.imgURL}" alt="${item.title}" />` : ''}
      ${item.type ? `<p>Type: ${item.type}</p>` : ''}
    `;
  }
}


