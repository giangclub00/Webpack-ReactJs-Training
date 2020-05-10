npm i react react-dom --save
npm i webpack babel-core babel-loader babel-preset-env babel-preset-react --save-dev
npm i css-loader style-loader --save-dev
npm i file-loader --save-dev


vendor.js => libs trong dependencies sẽ được lưu cache lần sau k tải lại nữa
bundle.js => những mobule chính có sự thay đổi nên sẽ cập nhập