import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    Item: [
      {
        menu: 'English',
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
      }]
  },
  ja: {
    Item: [
      {
        menu: '日本語の',
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
      }]
  },
  cn: {
    Item: [
      {
        menu: '简体中文',
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
      }]
  }
}

export default new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
})
