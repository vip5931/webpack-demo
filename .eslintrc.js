module.exports = {
  // 继承eslint的规则
  extends: ['eslint:recommended'],
  // 解析器
  parserOptions: {
    // 指定es版本
    ecmaVersion: 2020,
    // 指定js的模块化方案
    sourceType: 'module',
  },
  env: {
    // 启用node中全局变量
    node: true,
    // 启用浏览器中全局变量
    browser: true,
  },
  // 自定义规则
  rules: {
    'no-var': 1, // 不能使用var定义变量
    'no-console': 1, // 不能使用console
    // 'no-unused-vars': 1, // 不能有未使用的变量
    // 'no-undef': 1, // 不能有未定义的变量
    // 'no-irregular-whitespace': 1, // 不能有不规则的空格
    // 'no-trailing-spaces': 1, // 一行结束后面不要有空格
    // 'no-multiple-empty-lines': [1, { max: 2 }], // 空行最多不能超过2行
    // 'no-const-assign': 1, // 不能修改const声明的变量
    // 'no-duplicate-imports': 1, // 不能重复import模块
    // 'no-duplicate-case': 1, // switch中的case标签不能重复
    // 'no-dupe-args': 1, // 函数参数不能重复
    // 'no-dupe-keys': 1, // 对象中的key不能重复
    // 'no-debugger': 1, // 不能使用debugger
    // 'no-alert': 1, // 不能使用alert confirm prompt
    // 'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    // 'no-empty': 1, // 块语句中的内容不能为空
    // 'no-empty-character-class': 1, // 正则表达式中的[]内容不能为空
    // 'no-eq-null': 1, // 禁止对null使用==或!=运算符
    // 'no-eval': 1, // 禁止使用eval
    // 'no-ex-assign': 1, // 禁止给catch语句中的异常参数赋值
    // 'no-extra-bind': 1, // 禁止不必要的函数绑定
    // 'no-extra-boolean-cast': 1, // 禁止不必要的bool转换
    // 'no-extra-parens': 1, // 禁止非必要的括号
    // 'no-extra-semi': 1, // 禁止多余的冒号
    // 'no-fallthrough': 1, // 禁止switch穿透
    // 'no-floating-decimal': 1, // 禁止省略浮点数中的0 .5 3.
    // 'no-func-assign': 1, // 禁止重复的函数声明
    // 'no-implied-eval': 1, // 禁止使用隐式eval
    // 'no-invalid-regexp': 1, // 禁止无效的正则表达式
    // 'no-invalid-this': 1, // 禁止无效的this，只能用在构造器，类，对象字面量
    // 'no-iterator': 1, // 禁止使用__iterator__ 属性
    // 'no-label-var': 1, // label名不能与var声明的变量名相同
    // 'no-labels': 1, // 禁止标签声明
    // 'no-lone-blocks': 1, // 禁止不必要的嵌套块
    // 'no-loop-func': 1, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    // 'no-mixed-requires': 1, // 声明时不能混用声明类型
    // 'no-multi-spaces': 1, // 不能用多余的空格
    // 'no-multi-str': 1, // 字符串不能用\换行
    // 'no-native-reassign': 1, // 不能重写native对象
    // 'no-new': 1, // 禁止在使用new构造一个实例后不赋值
    // 'no-new-func': 1, // 禁止使用new Function
    // 'no-new-object': 1, // 禁止使用new Object()
    // 'no-new-require': 1, // 禁止使用new require
    // 'no-new-wrappers': 1, // 禁止使用new创建包装实例，new String new Boolean new Number
    // 'no-obj-calls': 1, // 不能调用内置的全局对象，比如Math() JSON()
    // 'no-octal': 1, // 禁止使用八进制数字
    // 'no-octal-escape': 1, // 禁止使用八进制转义序列
    // 'no-param-reassign': 1, // 禁止给参数重新赋值
    // 'no-path-concat': 1, // node中不能使用__dirname或__filename做路径拼接
    // 'no-proto': 1, // 禁止使用__proto__属性
    // 'no-redeclare': 1, // 禁止重复声明变量
    // 'no-regex-spaces': 1, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    // 'no-return-assign': 1, // return 语句中不能有赋值表达式
    // 'no-script-url': 1, // 禁止使用javascript:void(0)
    // 'no-self-compare': 1, // 不能比较自身
    // 'no-sequences': 1, // 禁止使用逗号运算符
    // 'no-shadow': 1, // 禁止变量声明与外层作用域的变量同名
    // 'no-shadow-restricted-names': 1, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    // 'no-spaced-func': 1, // 函数调用时 函数名与()之间不能有空格
    // 'no-sparse-arrays': 1, // 禁止稀疏数组， [1,,2]
    // 'no-this-before-super': 1, // 在调用super()之前不能使用this或super
    // 'no-throw-literal': 1, // 禁止抛出字面量错误 throw "error";
    // 'no-undef-init': 1, // 变量初始化时不能直接给它赋值为undefined
    // 'no-unexpected-multiline': 1, // 避免多行表达式
    // 'no-unneeded-ternary': 1, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    // 'no-unreachable': 1, // 不能有无法执行的代码
    // 'no-unused-expressions': 1, // 禁止无用的表达式
    // 'no-unused-vars': 1, // 不能有声明后未被使用的变量或参数
    // 'no-use-before-define': 1, // 未定义前不能使用
    // 'no-useless-call': 1, // 禁止不必要的call和apply
    // 'no-useless-concat': 1, // 禁止不必要的字符串字面量或模板字面量的连接
    // 'no-void': 1, // 禁用void操作符
    // 'no-var': 1, // 禁用var，用let和const代替
    // 'no-warning-comments': 1, // 不能有警告备注
    // 'no-with': 1, // 禁用with
    // 'array-bracket-spacing': 1, // 是否允许非空数组里面有多余的空格
    // 'arrow-parens': 1, // 箭头函数用小括号括起来
    // 'arrow-spacing': 1, // =>的前/后括号
    // 'accessor-pairs': 1, // 在对象中使用getter/setter
    // 'block-scoped-var': 1, // 块语句中使用var
    // 'brace-style': 1, // if while function 后面的{必须与if在同一行，java风格。
    // 'callback-return': 1, // 强制数组方法的回调函数中有 return 语句
    // 'comma-dangle': 1, // 对象字面量项尾不能有逗号
    // 'comma-spacing': 1, // 逗号前后的空格
    // 'comma-style': 1, // 逗号风格，换行时在行首还是行尾
    // 'complexity': 1, // 循环复杂度
    // 'computed-property-spacing': 1, // 是否允许计算后的键名什么的
    // 'consistent-return': 1, // return 后面是否允许省略
    // 'consistent-this': 1, // this别名
    // 'constructor-super': 1, // 非派生类不能调用super，派生类必须调用super
    // 'curly': 1, // 必须使用 if(){} 中的{}
    // 'default-case': 1, // switch语句最后必须有default
    // 'dot-location': 1, // 对象访问符的位置，换行的时候在行首还是行尾
    // 'dot-notation': 1, // 避免不必要的方括号
    // 'eol-last': 1, // 文件以单一的换行符结束
    // 'eqeqeq': 1, // 必须使用全等
    // 'func-names': 1, // 函数表达式必须有名字
    // 'func-style': 1, // 函数风格，规定只能使用函数声明/函数表达式
    // 'generator-star-spacing': 1, // 生成器函数*的前后空格
    // 'guard-for-in': 1, // for in循环要用if语句过滤
    // 'handle-callback-err': 1, // nodejs 处理错误
    // 'id-length': 1, // 变量名长度
    // 'indent': 1, // 缩进风格
    // 'init-declarations': 1, // 声明时必须赋初值
    // 'key-spacing': 1, // 对象字面量中冒号的前后空格
    // 'lines-around-comment': 1, // 行前/行后备注
    // 'max-depth': 1, // 嵌套块深度
    // 'max-len': 1, // 字符串最大长度
    // 'max-nested-callbacks': 1, // 回调嵌套深度
    // 'max-params': 1, // 函数最多只能有3个参数
    // 'max-statements': 1, // 函数内最多有几个声明
    // 'new-cap': 1, // 构造函数首字母大写
    // 'new-parens': 1, // new时必须加小括号
    // 'newline-after-var': 1, // 变量声明后是否需要空一行
    // 'object-curly-spacing': 1, // 大括号内是否允许不必要的空格
    // 'object-shorthand': 1, // 强制对象字面量缩写语法
    // 'one-var': 1, // 连续声明
    // 'operator-assignment': 1, // 赋值运算符 += -=什么的
    // 'operator-linebreak': 1, // 换行时运算符在行尾还是行首
    // 'padded-blocks': 1, // 块语句内行首行尾是否要空行
  },
}
