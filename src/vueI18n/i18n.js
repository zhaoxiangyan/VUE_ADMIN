import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    Item: [
      {
        menu: 'Dashboard',
        iconclassname: 'el-icon-date',
        url: 'home'
      },
      {
        menu: 'Account management',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: 'Role management', url: 'one'},
                    {option: 'Account management', url: 'two'}
        ]
      },
      {
        menu: 'System parameter setting',
        iconclassname: 'el-icon-message',
        item: [
                    {option: 'Transaction type', url: 'three'},
                    {option: 'Transaction type name', url: 'four'},
                    {option: 'Transaction type language', url: 'five'},
                    {option: 'Investment settings', url: 'six'},
                    {option: 'Margin setting', url: 'seven'},
                    {option: 'Time setting', url: 'eight'},
                    {option: 'System load settings', url: 'nine'}
        ]
      },
      {
        menu: '风控参数设置',
        iconclassname: 'el-icon-star-off',
        item: [
                    {option: 'Types and types of transactions', url: ''},
                    {option: 'Transaction period setting', url: ''},
                    {option: '交易组投资额风控', url: ''},
                    {option: '交易组利润率风控', url: ''}
        ]
      },
      {
        menu: 'Risk parameter setting',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: 'Total transaction settings', url: ''},
                    {option: 'Total order setting', url: ''},
                    {option: 'Investment parameter setting', url: ''}
        ]
      },
      {
        menu: 'Risk monitoring',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: 'Transaction alarm monitoring', url: ''},
                    {option: '外汇普通盈亏监控', url: ''},
                    {option: '短线外汇盈亏监控', url: ''},
                    {option: 'IP address monitoring', url: ''}
        ]
      },
      {
        menu: 'Report query',
        iconclassname: 'el-icon-message',
        item: [
                    {option: '短线外汇持仓交易明细', url: ''},
                    {option: '短线外汇平仓交易明细', url: ''},
                    {option: '外汇持仓交易明细', url: ''},
                    {option: '外汇平仓交易明细', url: ''},
                    {option: 'Entry details', url: ''},
                    {option: 'Output gold details', url: ''},
                    {option: 'Commission details', url: ''},
                    {option: 'User Commission details', url: ''},
                    {option: 'Commission source details', url: ''},
                    {option: 'Order Commission details', url: ''}
        ]
      },
      {
        menu: 'Statistical query',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: 'New registered user statistics', url: ''},
                    {option: 'Volume statistics', url: ''},
                    {option: 'Gold entry statistics', url: ''},
                    {option: 'Gold output statistics', url: ''},
                    {option: 'Commission volume statistics', url: ''},
                    {option: 'User Commission volume statistics', url: ''},
                    {option: '短线外汇盈亏统计', url: ''},
                    {option: '外汇交易盈亏统计', url: ''}
        ]
      },
      {
        menu: 'Auditing/Freezing/Setting',
        iconclassname: 'el-icon-star-off',
        item: [
                    {option: 'Registered customer audit', url: ''},
                    {option: 'Client freeze', url: ''},
                    {option: 'Agency audit', url: ''},
                    {option: 'Audit of gold payment', url: ''},
                    {option: 'Proxy revocation', url: ''},
                    {option: 'System parameter setting', url: ''},
                    {option: '通用佣金参数设置', url: ''},
                    {option: '指定佣金参数设置', url: ''},
                    {option: '短线佣金参数设置', url: ''},
                    {option: '外汇佣金参数设置', url: ''},
                    {option: 'Group parameter settings', url: ''},
                    {option: 'Group variety setting', url: ''},
                    {option: 'Variety parameter setting', url: ''},
                    {option: 'Alarm parameter setting', url: ''}
        ]
      },
      {
        menu: 'Information management',
        iconclassname: 'el-icon-star-on',
        item: [
            {option: 'Notification management', url: ''},
            {option: 'Message management', url: ''}
        ]
      }],
    Userlogin: {
      placeholder1: 'Login account ',
      placeholder2: 'Login password ',
      checkbox: 'Remember',
      login: 'Login',
      register: 'Register'
    },
    Userregister: {
      text: ['Navigate', 'Fast Navigate', 'Login', 'Register', 'Account Registration', 'Current page'],
      label: ['User Name', 'Introducing Broker Number', 'Passport Number', 'Mobile Number', 'Email Address', 'Country', 'Province/State', 'City', 'District', 'Address', 'Password', 'Confirm Password', 'Upload ID Card Front', 'Upload ID Card Back'],
      formtext: ['Drag the picture here or', 'Click upload', 'Attention:Upload image size should not exceed 2Mb;otherwise might affect account verification', 'I have read,understood and accepted', 'Customer Agreement', 'Register']
    },
    Language: {src: '../../static/img/English.png', value: 'English'}
  },
  ja: {
    Item: [
      {
        menu: 'ダッシュボード',
        iconclassname: 'el-icon-date',
        url: 'home'
      },
      {
        menu: 'アカウント管理',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: 'キャラクター管理', url: 'one'},
                    {option: 'アカウント管理', url: 'two'}
        ]
      },
      {
        menu: 'システムパラメータ設定',
        iconclassname: 'el-icon-message',
        item: [
                    {option: '取引タイプ設定', url: 'three'},
                    {option: '取引タイプ名称設定', url: 'four'},
                    {option: '取引タイプ言語設定', url: 'five'},
                    {option: '投資額設定', url: 'six'},
                    {option: '利益率設定', url: 'seven'},
                    {option: '時間帯設定', url: 'eight'},
                    {option: 'システム負荷設定', url: 'nine'}
        ]
      },
      {
        menu: '風制御パラメータ設定',
        iconclassname: 'el-icon-star-off',
        item: [
                    {option: '取引品種とタイプ設定', url: ''},
                    {option: 'トランザクションタイム設定', url: ''},
                    {option: '取引グループ投資額風制御', url: ''},
                    {option: '取引グループ利益率風制御', url: ''}
        ]
      },
      {
        menu: 'リスクパラメータ設定',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: '総取引総量設定', url: ''},
                    {option: '受注総数設定', url: ''},
                    {option: '投資パラメータ設定', url: ''}
        ]
      },
      {
        menu: 'リスク監視',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: 'トランザクション警報制御', url: ''},
                    {option: '外国為替普通損益監視', url: ''},
                    {option: '短期外貨外貨損益監視', url: ''},
                    {option: 'IPアドレス監視', url: ''}
        ]
      },
      {
        menu: '諸表クエリ',
        iconclassname: 'el-icon-message',
        item: [
                    {option: '短期外貨取引明細倉', url: ''},
                    {option: '短期外貨外貨取引明細', url: ''},
                    {option: '外国為替取引明細倉', url: ''},
                    {option: '外貨平倉取引明細', url: ''},
                    {option: '入金明細', url: ''},
                    {option: '金の明細を出す', url: ''},
                    {option: 'コミッション明細', url: ''},
                    {option: 'ユーザコミッション明細', url: ''},
                    {option: 'コミッションは明細が由来します', url: ''},
                    {option: '注文コミッション明細明細', url: ''}
        ]
      },
      {
        menu: '統計調査',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: '新登録ユーザー統計', url: ''},
                    {option: '取引量統計', url: ''},
                    {option: '入金量統計', url: ''},
                    {option: '金量統計', url: ''},
                    {option: 'コミッション統計', url: ''},
                    {option: 'ユーザマージン統計', url: ''},
                    {option: '短期外貨外貨損益統計', url: ''},
                    {option: '外貨取引損益統計', url: ''}
        ]
      },
      {
        menu: '監査/凍結/設定',
        iconclassname: 'el-icon-star-off',
        item: [
                            {option: '登録顧客審査', url: ''},
                            {option: 'お客様凍結', url: ''},
                            {option: '代理審査', url: ''},
                            {option: '金を出して審査する', url: ''},
                            {option: '代理資格を取り消す', url: ''},
                            {option: 'システムパラメータ設定', url: ''},
                            {option: '一般コミッションパラメータ設定', url: ''},
                            {option: '指定コミッションパラメータ設定', url: ''},
                            {option: 'スタブコミッションパラメータ設定', url: ''},
                            {option: '外国為替コミッションパラメータ設定', url: ''},
                            {option: '組パラメータ設定', url: ''},
                            {option: '組品種設置', url: ''},
                            {option: '品種パラメータ設定', url: ''},
                            {option: '警報パラメータ設定', url: ''}
        ]
      },
      {
        menu: '情報管理',
        iconclassname: 'el-icon-star-on',
        item: [
            {option: '通告管理', url: ''},
            {option: 'メッセージ管理', url: ''}
        ]
      }],
    Userlogin: {
      placeholder1: 'アカウントの登録 ',
      placeholder2: 'パスワードを登録 ',
      checkbox: 'パスワードを覚えて ',
      login: '登録 ',
      register: '登録 '
    },
    Userregister: {
      text: ['ナビゲーション', 'ショートカットナビゲーション', '登録', '登録', '登録の真実のアカウント', '現在位置'],
      label: ['氏名', '推薦人番号', '身分証明書番号', '携帯電話', '電子メール', '国', '省/州', '市', '県', '詳細なアドレス', 'アカウントのパスワード', 'アカウントのパスワードを確認する', '身分証明書をアップロードする', '身分証明書をアップロードする'],
      formtext: ['写真はここに、あるいは', 'アップクリックする', '注意事項：1枚の写真のサイズアップロードを超えないでください2 M、さもなくば影響の口座を設ける', '私はすでに読んで、理解して受け入れて', 'クライアントプロトコル', '登録']
    },
    Language: {src: '../../static/img/Japan.png', value: '日本語'}
  },
  cn: {
    Item: [
      {
        menu: '仪表板',
        iconclassname: 'el-icon-date',
        url: 'home'
      },
      {
        menu: '账号管理',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: '角色管理', url: 'one'},
                    {option: '账号管理', url: 'two'}
        ]
      },
      {
        menu: '系统参数设置',
        iconclassname: 'el-icon-message',
        item: [
                    {option: '交易类型设置', url: 'three'},
                    {option: '交易类型名称设置', url: 'four'},
                    {option: '交易类型语言设置', url: 'five'},
                    {option: '投资额设置', url: 'six'},
                    {option: '利润率设置', url: 'seven'},
                    {option: '时间段设置', url: 'eight'},
                    {option: '系统加载设置', url: 'nine'}
        ]
      },
      {
        menu: '风控参数设置',
        iconclassname: 'el-icon-star-off',
        item: [
                    {option: '交易品种与类型设置', url: ''},
                    {option: '交易时间段设置', url: ''},
                    {option: '交易组投资额风控', url: ''},
                    {option: '交易组利润率风控', url: ''}
        ]
      },
      {
        menu: '风险参数设置',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: '交易总量设置', url: ''},
                    {option: '订单总数设置', url: ''},
                    {option: '投资参数设置', url: ''}
        ]
      },
      {
        menu: '风险监控',
        iconclassname: 'el-icon-menu',
        item: [
                    {option: '交易报警监控', url: ''},
                    {option: '外汇普通盈亏监控', url: ''},
                    {option: '短线外汇盈亏监控', url: ''},
                    {option: 'IP地址监控', url: ''}
        ]
      },
      {
        menu: '报表查询',
        iconclassname: 'el-icon-message',
        item: [
                    {option: '短线外汇持仓交易明细', url: ''},
                    {option: '短线外汇平仓交易明细', url: ''},
                    {option: '外汇持仓交易明细', url: ''},
                    {option: '外汇平仓交易明细', url: ''},
                    {option: '入金明细', url: ''},
                    {option: '出金明细', url: ''},
                    {option: '佣金明细', url: ''},
                    {option: '用户佣金明细', url: ''},
                    {option: '佣金来源明细', url: ''},
                    {option: '订单佣金明细', url: ''}
        ]
      },
      {
        menu: '统计查询',
        iconclassname: 'el-icon-star-on',
        item: [
                    {option: '新注册用户统计', url: ''},
                    {option: '交易量统计', url: ''},
                    {option: '入金量统计', url: ''},
                    {option: '出金量统计', url: ''},
                    {option: '佣金量统计', url: ''},
                    {option: '用户佣金量统计', url: ''},
                    {option: '短线外汇盈亏统计', url: ''},
                    {option: '外汇交易盈亏统计', url: ''}
        ]
      },
      {
        menu: '审核/冻结/设置',
        iconclassname: 'el-icon-star-off',
        item: [
                            {option: '注册客户审核', url: ''},
                            {option: '客户冻结', url: ''},
                            {option: '代理审核', url: ''},
                            {option: '出金审核', url: ''},
                            {option: '代理资格撤销', url: ''},
                            {option: '系统参数设置', url: ''},
                            {option: '通用佣金参数设置', url: ''},
                            {option: '指定佣金参数设置', url: ''},
                            {option: '短线佣金参数设置', url: ''},
                            {option: '外汇佣金参数设置', url: ''},
                            {option: '组参数设置', url: ''},
                            {option: '组品种设置', url: ''},
                            {option: '品种参数设置', url: ''},
                            {option: '报警参数设置', url: ''}
        ]
      },
      {
        menu: '信息管理',
        iconclassname: 'el-icon-star-on',
        item: [
            {option: '通告管理', url: ''},
            {option: '留言管理', url: ''}
        ]
      }],
    Userlogin: {
      placeholder1: '登录账号',
      placeholder2: '登录密码',
      checkbox: '记住密码',
      login: '登录',
      register: '注册'
    },
    Userregister: {
      text: ['导航', '快捷导航', '登录', '注册', '注册真实账号', '当前位置'],
      label: ['姓名', '推荐人编号', '身份证号码', '手机', '邮箱', '国家', '省/州', '市', '县', '详细地址', '账号密码', '确认账号密码', '上传身份证正面', '上传身份证反面'],
      formtext: ['将图片拖到此处，或', '点击上传', '注意事项：上传的单张图片大小不要超过2M；否则影响开户', '我已阅读，了解并接受', '客户协议', '注册']
    },
    Language: {src: '../../static/img/China.png', value: '简体中文'}
  }
}

export default new VueI18n({
  locale: 'cn', // set locale
  messages // set locale messages
})

// Item是sidebar.vue页面数据
// Userlogin是userlogin.vue页面数据
// Userregister是userregister.vue页面数据
// Language是多个页面语言切换公用数据
