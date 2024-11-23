# Tool Bar

*component documentation*

## API
### Props

- `item_num`

  - **Description:** the total amount of components to be rendered
  - **Type:** number
  - **Default:** 0

- `size`

  - **Description:** the size of the icon
  - **Type:** number
  - **Default:** 0

- `icons`

  - **Description:** the icon image (the class name of the icon from [Boxicons](https://boxicons.com/))
  - **Type:** string[] 
  - **Default:** ''

- `use_switches`

    - **Description:** weather the component $i$ need a switch button
    - **Type:** boolean
    - **Default:** false

- `slot_widthes`

    - **Description:** the width of the component $i$'s switch bar

    - **Type:** number

    - **Default:** 0

### Slots

- `slot-index-1`
  - **Description:** the origin state of the component
- `slot-index-2` (if need switch bar)
  - **Description:** another state of the component



## Usage

### Common usage

the preferred usage is:

- first create a component list
