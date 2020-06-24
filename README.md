# Feedback-js

## 使用
引入 Javascript 文件
```html
<script type="text/javascript" src="https://utest.nie.netease.com:9033/js/feedback.js"></script>
```

Javascript 代码中进行初始化
```javascript
// 初始化
Feedback.init(appId, options)

// 可以设置当前用户，提交时会带上这个信息，字符串类型
Feedback.user('东子') // 设置用户
Feedback.user() // 获取当前的用户：东子

// 也可以设置额外数据，对象类型
Feedback.data({alias: '东哥'}) // 设置
Feedback.data() // 获取
```

## 参数

初始参数，可在 options 设置对应字段进行覆盖。
```typescript
const defaults: FeedbackOptions = {
  // 接收数据的接口
  server: 'https://utest.nie.netease.com:9033/receiveFeedback',

  // 可调整的样式
  style: {
    primaryColor: '#1890ff', // 主颜色
    bottom: 48, // 距离底部距离
    right: 48, // 距离右侧距离
    size: 48 // 反馈按钮的尺寸
  },

  // 显示的文案
  strings: {
    title: '意见反馈',
    submit: '提 交',
    labels: {
      input: '您遇到的问题、意见或建议',
      image: '可附上相关截图（最多添加3张）'
    },
    placeholders: {
      input: '请输入',
      image: '上传或粘贴图片'
    },
    contact: '或者直接联系管理员'
  }
}
```

如果需要更加定制化的样式，请编写 css 覆盖默认的样式。