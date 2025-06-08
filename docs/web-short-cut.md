# Web Short Cut
*component documentation*
## Overview
Takes a list of shortcuts and then display them in order
## API
### Props
- `items`
  - **Description:** short cut items to be displayed
  - **Type:** shortcut[]
  - **Default:** []
`shortcut`
```
LinkOri: string
LinkIcon: string
LinkTitle: string
```
commonly got from `GET /api/shortcuts`

## Usage
### Common usage
the preferred usage is:
- first get all the shortcuts by:
```js
const short_cut_items = ref([]);

const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
});

function getShortCutItems() {
  var url = "/shortcuts";
  axios_instance.get(url)
  .then(res => {
    short_cut_items.value = res.data.data;
  })
  .catch(err => console.log(err));
}
```
then pass the result to web-short-cut:
```html
<web-short-cut :items="short_cut_items"></web-short-cut>
```

### Example usage
```html
<web-short-cut :items="short_cut_items"></web-short-cut>
```
![[Pasted image 20250607235839.png]]
