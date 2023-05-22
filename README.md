# Splash CSS Documentation

# Header
Styles for the header component.

## Example
```html
<h2 class="header">Heading 2</h2>
<h3 class="header">Heading 3</h3>
<h4 class="header">Heading 4</h4>
<h5 class="header">Heading 5</h5>
<h6 class="header">Heading 6</h6>
```

# Hint
Sets the font size and opacity for the hint component.

## Example
```html
<p class="hint">
  <!-- content here -->
</p>
```

# Button
Sets the default styles for the button component.

## Example
```html
<button class="btn">
  Button
</button>
```

## Modifiers

### `.disabled`
Sets the styles for the button component when it is disabled.
```html
<button class="btn" disabled>
  Button
</button>
```

### `.translucent`
Sets the styles for the button component when it is of the translucent type.
```html
<button class="btn translucent">
  Button
</button>
```

### `.primary`
Sets the styles for the button component when it is of the primary type.
```html
<button class="btn primary">
  Button
</button>
```

### `.negative`
Sets the styles for the button component when it is of the negative type.
```html
<button class="btn negative">
  Button
</button>
```

### `.compact`
Sets the styles for the button component when it is of the compact type.
```html
<button class="btn compact">
  Button
</button>
```

### `.fluid`
Sets the styles for the button component when it is of the fluid type.
```html
<button class="btn fluid">
  Button
</button>
```

### `.circular`
Sets the styles for the button component when it is of the circular type.
```html
<button class="btn circular">
  Button
</button>
```

### `.icon`
Sets the styles for the button component when it has an icon.
```html
<button class="btn icon">
  <svg>...</svg>
  Button
</button>
```

# Link
Styles for the link component.

## Example
```html
<a href="#" class="link">
  Link
</a>
```

## Modifiers

### `.negative`
Sets the styles for the link component when it is of the negative type.
```html
<a href="#" class="link negative">
  Link
</a>
```

# Input
Styles for the input component.

## Example
```html
<div class="input">
 <input type="text" placeholder="Input">
</div>
```
## Modifiers

### `.fluid`
Sets the styles for the input component when it is of the fluid type.
```html
<div class="input fluid">
  <input type="text" placeholder="Input">
</div>
```

### `.button`
Sets the styles for the input element inside the input component when it is of the button type.
```html
<div class="input button">
  <input type="text" placeholder="Input">
  <button class="btn">Button</button>
	<!-- Button inside input -->
</div>
```

# Select
Styles for the select component.

## Example
```html
<select class="select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

# Segmented Control
Styles for the segmented control component.

## Example
```html
<div class="segmented-control">
  <button class="active">Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

## Modifiers

### >button.active
Sets the styles for the button element inside the segmented control component when it is active.
```html
<div class="segmented-control">
  <button class="active">Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

# Badge
Styles for the badge component.

## Example
```html
<span class="badge">Badge</span>
```
## Modifiers

### `.outline`
Sets the styles for the badge component when it is of the outline type.
```html
<span class="badge outline">Badge</span>
```

## Customization
The following CSS variables can be used to customize the badge component:

- `--color`: Sets the background color for the badge component. Default value is `red`.

# Top Menu
Styles for the top menu component.

## Example
```html
<div id="top-menu">
  <button class="btn">Button</button>
</div>
```

## Modifiers

### `.raw`
Sets the styles for the top menu component when it is of the raw (not a grid) type.
```html
<div class="top-menu raw">
  <button class="btn">Button</button>
</div>
```

# Bottom Menu
Styles for the bottom menu component.

## Example
```html
<div class="bottom-menu">
  <button class="btn">Button</button>
</div>
```

# Fixed Navigation
Sets the styles for the fixed navigation component when the screen width is greater than or equal to 768px.

## Example
```html
<nav class="fixed-nav">
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>
</nav>
```

# Container
Styles for the container component.

## Example
```html
<div class="container">
  Content
</div>
```

## Modifiers

### `.fluid`
Sets the width of container to 100%.
```html
<div class="fluid container">
  Content
</div>
```

# List
Styles for the list component.

## Example
```html
<ul class="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

## Modifiers

### `>.item`
Sets the default styles for the items inside the list component.
```html
<ul class="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

### `.divided`
Sets the styles for the divided list component.
```html
<ul class="divided list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li</ul>
```

### `.compact`
Sets the styles for the compact list component.
```html
<ul class="compact list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

# Card
Styles for the card component.

## Example
```html
<div class="card">
  <div class="header">Header</div>
  <div class="content">Content</div>
  <div class="buttons">
    <button class="btn">Button 1</button>
    <button class="btn">Button 2</button>
 </div>
</div>
```

# Segment
Styles for the segment component.

## Example
```html
<div class="segment">
  Content
</div>
```

# Grid
Styles for the grid component.

## Example
```html
<div class="grid cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

## Modifiers

### `.cols-x`
Sets the number of columns for the grid component.
```
<div class="grid cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### `>.col-x`
Set the width of the column to the specified number of columns.
```html
<div class="grid cols-6">
  <div class="col-1">1 columns (default)</div>
  <div class="col-2">2 columns</div>
  <div class="col-3">3 columns</div>
</div>
```

#### `.gap-1` (obsolete)
Sets the gap between the child elements of the grid component.
```html
<div class="grid gap-1">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

#### `.stackable`
Sets the grid to stackable on smaller screens.
```html
<div class="grid stackable">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

# Dialog
Styles for the dialog component.

## Example
```html
<div class="dialog">
  <div class="window">
    <div class="header">Header</div>
    <div class="content">Content</div>
    <div class="buttons">
      <button class="btn">Button 1</button>
      <button class="btn">Button 2</button>
    </div>
  </div>
</div>
```

# Align Panel
Styles for the align panel component.

## Example
```html
<div class="align-panel">
  <div class="left">Left Content</div>
  <div>Middle content</div>
  <div class="right">Right Content</div>
</div>
```
## Modifiers

### `>.left`
Sets the default styles for the left-aligned component of the align panel.
```html
<div class="align-panel">
  <div class="left">Left-aligned Content</div>
</div>
```

### `>.right`
Sets the default styles for the right-aligned component of the align panel.
```html
<div class="align-panel">
  <div class="right">Right-aligned Content</div>
</div>
```

# Sizes
`.s-*` resizes element to the specified size

**Aviable sizes are:**
- `xxs` (xx-small) - 0.4em
- `xs` (x-small) - 0.6em
- `s` (small) - 0.8em
- `m` (default) - 1em
- `l` (large) - 1.3em
- `xl` (x-large) - 1.6em
- `xxl` (xx-large) - 1.9em
- `xxxl` (xxx-large) - 2.2em
- `xxxxl` (xxxx-large) - 2.5em

## Example
```html
<div class="s-xxs">XX-small size</div>
<div class="s-xs">Extra small size</div>
<div class="s-s">Small size</div>
<div class="s-m">Medium size</div>
<div class="s-l">Large size</div>
<div class="s-xl">X-large size</div>
<div class="s-xxl">XX-large size</div>
<div class="s-xxxl">XXX-large size</div>
<div class="s-xxxxl">XXXX-large size</div>
```

# Colors
`.color-*` - sets the text color to the given

`.bg-*` - sets the background color to the given

**Aviable colors are:**
- `white`
- `black`
- `primary`
- `secondary`
- `tertiary`
- `red`
- `theme`

# Positioning
Styles for positioning elements.

## `.fixed`
Sets the position of an element to fixed.
```html
<div class="fixed">Content</div>
```

### `.fixed.top`
Sets the position of an element to fixed and aligns it to the top.
```html
<div class="fixed top">Content</div>
```

### `.fixed.right`
Sets the position of an element to fixed and aligns it to the right.
```html
<div class="fixed right">Content</div>
```

### `.fixed.bottom`
Sets the position of an element to fixed and aligns it to the bottom.
```html
<div class="fixed bottom">Content</div>
```

### `.fixed.left`
Sets the position of an element to fixed and aligns it to the left.
```html
<div class="fixed left">Content</div>
```

## `.float-*`

### `.float-right`
Floats an element to the right.
```html
<div class="float-right">Content</div>
```

# Others
Styles for borders, box model, and spacing.

## `.border-radius`
Sets the border radius to 1rem.
```html
<div class="border-radius">Content</div>
```

## `.o-fluid`
Sets the width of an element to 100% and makes it a block element.
```html
<div class="o-fluid">Content</div>
```

## `.margin-0`
Sets the margin of an element to 0.
```html
<div class="margin-0">Content</div>
```

## `.margin`
Sets the margin of an element to 1em.
```html
<div class="margin">Content</div>
```

## `.padding`
Sets the padding of an element to 1em.
```html
<div class="padding">Content</div>
```

## `.padding-0`
Sets the padding of an element to 0.
```html
<div class="padding-0">Content</div>
```

## `.centered`
Centers an element horizontally and vertically.
```html
<div class="centered">Content</div>
```

## `.space`
Sets the margin of an element to 2em.
```html
<div class="space">Content</div>
```

### `.small`, `.s`
Sets the margin of an element to 1em.
```html
<div class="small space">Content</div>
```

### `.medium`, `.m`
Sets the margin of an element to 2.
```html
<div class="medium space">Content</div>
```

### `.big`, `.l`
Sets the margin of an element to 4em.
```html
<div id="big space">Content</div>
```

### `.large`, `.xl`
Sets the margin of an element to 6em.
```html
<div class="large space">Content</div>
```

# Styles
Styles for various effects.

## `.bg-blur`, `.blur`
Applies a blur effect to the background.
```html
<div class="bg-blur">Content</div>
```

## `.theme-bg` (deprecated)
**Deprecated. Use `.bg-theme` instead.**

Sets the background color to the theme background color.
```html
<div class="theme-bg">Content</div>
```