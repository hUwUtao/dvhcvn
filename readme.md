## Hệ thống đơn vị hành chính Việt Nam
#### Tự động lấy dữ liệu từ [gso.gov.vn](https://danhmuchanhchinh.gso.gov.vn/DMDVHC.asmx) chuyển sang dạng JSON khi cài. 
### [Demo](https://github.com/hUwUtao/dvhcvn-demo)
### Sử dụng (với webpack): 

```js
const dvhc = 
```

### Mẫu
```js
const tinh = require("dvhcvn-ts/generated/0.json")[0]
const quan = require("dvhcvn-ts/generated/" + tinh.id + ".json")[0]
const phuong = require("dvhcvn-ts/generated/" +  quan.id + ".json")[0]
```