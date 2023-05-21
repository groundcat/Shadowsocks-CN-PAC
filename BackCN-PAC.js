/*
翻墙回国 PAC 规则片段
 */

var proxy = "SOCKS5 127.0.0.1:1086; SOCKS 127.0.0.1:1086; DIRECT;";

var rules = [

  "||dingtalk.com",
  "||reddianjing.com",
  "||jxedt.com",
  "||truste.com",
  "||wjx.cn",
  "||mct.gov.cn",
  "||360baoxian.net",
  "||aliyun.com",
  "||whhd.gov.cn",
  "||moji001.com",
  "||kanzhun.com",
  "||aixifan.com",
  "||canet.com.cn",
  "||globalsign.com",
  "||mapbar.com",
  "||caict.ac.cn",
  "||smm.cn",
  "||ymzhaopin.com",
  "||autonavi.com",
  "||alibabapictures.com",
  "||etao.com",
  "||guahao.com",
  "||51jingying.com",
  "||wa.me",
  "||jia.com",
  "||hikunpeng.com",
  "||dribbble.com",
  "||qunarcdn.com",
  "||motorsport-safety.org",
  "||westartrack.com",
  "||bestb2b.com",
  "||shjbzx.cn",
  "||58.com",
  "||acfun.cn",
  "||cnmstl.net",
  "||zbj.com",
  "||offcn.com",
  "||tencentmusic.com",
  "||beian.gov.cn",
  "||boosj.com",
  "||eztravel.com.tw",
  "||zzit.com.cn",
  "||sogou.com",
  "||alios.cn",
  "||zol-img.com.cn",
  "||fliggy.com",
  "||360kan.com",
  "||yunos.com",
  "||firefox.com.cn",
  "||itrust.org.cn",
  "||zx123.cn",
  "||shibangchina.com",
  "||antfin.com",
  "||yuwenmi.com",
  "||360.com",
  "||glass.com.cn",
  "||bjjubao.org",
  "||11467.com",
  "||piyao.org.cn",
  "||qqtn.com",
  "||59wz.com",
  "||wingontravel.com",
  "||zgjsks.com",
  "||xinmin.cn",
  "||qlrc.com",
  "||migudm.cn",
  "||tmall.com",
  "||knet.cn",
  "||mojicb.com",
  "||tbcdn.com",
  "||wps.cn",
  "||fang.com",
  "||xcc.cn",
  "||58pic.com",
  "||yellowurl.cn",
  "||tuniu.com",
  "||gcs-web.com",
  "||58cdn.com.cn",
  "||5i5j.com",
  "||chaopx.com",
  "||eoffcn.com",
  "||secrss.com",
  "||64365.com",
  "||yiche.com",
  "||douyucdn.cn",
  "||iqiyipic.com",
  "||xueqiu.com",
  "||eastday.com",
  "||cloudfront.net",
  "||218.242.124.22",
  "||699pic.com",
  "||youdaoads.com",
  "||downza.cn",
  "||cnipa.gov.cn",
  "||chinapp.com",
  "||cookiebot.com",
  "||bjjubao.org.cn",
  "||hotjar.com",
  "||wangxiao.cn",
  "||antgroup.com",
  "||sh.gov.cn",
  "||wggames.cn",
  "||daojia.com",
  "||xunbao178.com",
  "||goodjobs.cn",
  "||kztpms.com",
  "||ctrip.com",
  "||cifnews.com",
  "||souhu.com",
  "||dongqiudi.com",
  "||doubanio.com",
  "||gsxt.gov.cn",
  "||ebs.org.cn",
  "||yizhentv.com",
  "||netbian.com",
  "||liepin.com",
  "||processon.com",
  "||xinhuanet.com",
  "||migu.cn",
  "||360.cn",
  "||xunlei.com",
  "||sz.gov.cn",
  "||snet.tv",
  "||97973.com",
  "||wenmi.com",
  "||dongao.com",
  "||maimai.cn",
  "||gaoding.com",
  "||miguvideo.com",
  "||xuexila.com",
  "||qlogo.cn",
  "||jobui.com",
  "||58che.com",
  "||kuaishou.cn",
  "||jst.go.jp",
  "||mmstat.com",
  "||xibojiaoyu.com",
  "||127.net",
  "||znds.com",
  "||602.com",
  "||sohu.com.cn",
  "||pconline.com.cn",
  "||kaola.com",
  "||bdstatic.com",
  "||meituan.com",
  "||12377.cn",
  "||findlaw.cn",
  "||lmlq.com",
  "||braintreepayments.com",
  "||aligames.com",
  "||114ic.com",
  "||taobao.com",
  "||wjx.top",
  "||jdcorporateblog.com",
  "||qunar.com",
  "||jianzhi8.com",
  "||360buyimg.com",
  "||99114.com",
  "||imedao.com",
  "||szfw.org",
  "||weibo.cn",
  "||mesign.com",
  "||ele.me",
  "||xcar.com.cn",
  "||pmph.com",
  "||mw.company",
  "||radio366.com",
  "||iqiyi.com",
  "||sinajs.cn",
  "||shdf.gov.cn",
  "||izihun.com",
  "||onethingcloud.com",
  "||xiami.com",
  "||mps.gov.cn",
  "||cecdc.com",
  "||anjuke.com",
  "||fkguolu.com",
  "||anquanke.com",
  "||doi.org",
  "||woshipm.com",
  "||alipay.cn",
  "||mfa.gov.cn",
  "||zzfangkuai.com",
  "||cmvideo.cn",
  "||hiyayuyin.com",
  "||kuwo.cn",
  "||818ps.com",
  "||huaweicloud.com",
  "||aipai.com",
  "||trustutn.org",
  "||qingxuetang.com",
  "||tujia.com",
  "||weishi.com",
  "||acgvideo.com",
  "||manmankan.com",
  "||ccwork.com.cn",
  "||zmxy.com.cn",
  "||dangbei.com",
  "||xycloud.com",
  "||douyu.com",
  "||mi.com",
  "||kongfz.com",
  "||wechat.com",
  "||momo.com",
  "||umeng.com",
  "||renren.com",
  "||douban.com",
  "||chinahr.com",
  "||flipsnack.com",
  "||zhihu.com",
  "||027art.com",
  "||sxdn.com.cn",
  "||job5156.com",
  "||9ku.com",
  "||hunliji.com",
  "||suning.com",
  "||hunantv.com",
  "||feishu.cn",
  "||tencent.com",
  "||lizhi.fm",
  "||ifcert.cn",
  "||jumei.com",
  "||zhipin.com",
  "||360.net",
  "||bcebos.com",
  "||wanmei.com",
  "||alimama.com",
  "||itc.cn",
  "||kuaishou.com",
  "||tmall.hk",
  "||zgsydw.com",
  "||verisign.com",
  "||saic.gov.cn",
  "||huawei.com",
  "||kaolacdn.com",
  "||aliexpress.com",
  "||1637.com",
  "||viptijian.com",
  "||trip.com",
  "||danjuanfunds.com",
  "||chinairn.com",
  "||url.cn",
  "||leju.com",
  "||jiaobu365.com",
  "||geetest.com",
  "||163yun.com",
  "||duwenzhang.com",
  "||baobao88.com",
  "||bmlink.com",
  "||ctripins.com",
  "||1010jiajiao.com",
  "||tianqi.com",
  "||shipin520.com",
  "||360totalsecurity.com",
  "||360jie.com.cn",
  "||qihucdn.com",
  "||dpurl.cn",
  "||v-56.com",
  "||trustexporter.com",
  "||cntrades.com",
  "||picmoon.com",
  "||ximalaya.com",
  "||ibaotu.com",
  "||klaviyo.com",
  "||figma.com",
  "||51mdd.com",
  "||baidupcs.com",
  "||alitrip.com",
  "||alibabagroup.com",
  "||sina.com",
  "||uc.cn",
  "||ca.gov",
  "||baixing.com",
  "||alibaba.com",
  "||czvv.com",
  "||cnzz.com",
  "||job592.com",
  "||alipay.com",
  "||loupan.com",
  "||autohome.com.cn",
  "||fjzol.com",
  "||qingting.fm",
  "||tieyou.com",
  "||wechat.design",
  "||alicdn.com",
  "||qpic.cn",
  "||hitv.com",
  "||360safe.com",
  "||sz315.org",
  "||ucweb.com",
  "||sina.cn",
  "||ynit580.com",
  "||com​",
  "||mogucdn.com",
  "||huibo.com",
  "||aliwx.com.cn",
  "||jianshu.com",
  "||huazhen2008.com",
  "||zhenghaoyou.com",
  "||szcredit.org.cn",
  "||soso.com",
  "||to8to.com",
  "||zhuanzhuan.com",
  "||xiaomi.com",
  "||1ppt.com",
  "||zjfda.gov.cn",
  "||mogujie.com",
  "||cyberpolice.cn",
  "||atsec.cn",
  "||hotjob.cn",
  "||jiemeng8.com",
  "||eqxiu.com",
  "||mike-x.com",
  "||51auto.com",
  "||qianxin.com",
  "||sandai.net",
  "||weibo.com",
  "||pinduoduo.com",
  "||kugou.com",
  "||yystatic.com",
  "||qqyou.com",
  "||xiami.net",
  "||bytedance.com",
  "||crup.cn",
  "||toursforfun.com",
  "||gaoxiaojob.com",
  "||maoyan.com",
  "||t.cn",
  "||c-ctrip.com",
  "||so.com",
  "||miaopai.com",
  "||yunaq.com",
  "||toutiao.com",
  "||fangcloud.com",
  "||zx110.org",
  "||ccm.gov.cn",
  "||gongchang.com",
  "||people-health.cn",
  "||netentsec.com",
  "||126.com",
  "||xnimg.cn",
  "||taodocs.com",
  "||xmcdn.com",
  "||creditchina.gov.cn",
  "||damai.cn",
  "||onething.net",
  "||ithome.com",
  "||hdslb.com",
  "||miit.gov.cn",
  "||sinaimg.cn",
  "||jd.com",
  "||xuexi.la",
  "||hrflag.com",
  "||bilibili.com",
  "||mozilla.org",
  "||51sole.com",
  "||thunderurl.com",
  "||gzjd.gov.cn",
  "||youbian.com",
  "||cnki.net",
  "||eduei.com",
  "||weixin.com",
  "||qtfm.cn",
  "||xizhi-ec.com",
  "||heiyan.com",
  "||jnupress.com",
  "||youku.com",
  "||tudou.com",
  "||tiktokcdn.com",
  "||66law.cn",
  "||zj.gov.cn",
  "||ooopic.com",
  "||588ku.com",
  "||qq.com",
  "||ykimg.com",
  "||photophoto.cn",
  "||china.cn",
  "||4399.com",
  "||moji.com",
  "||qixin.com",
  "||zol.com",
  "||meituan.net",
  "||vip.com",
  "||qiantucdn.com",
  "||zol.com.cn",
  "||cnhubei.com",
  "||acfun.com",
  "||gtimg.cn",
  "||xzgoogle.com",
  "||soku.com",
  "||youku.tv",
  "||alibabacloud.com",
  "||qianlima.com",
  "||beijing.gov.cn",
  "||4.cn",
  "||yiqifa.com",
  "||gdjubao.cn",
  "||ganji.com",
  "||tooopen.com",
  "||csdn.net",
  "||liuxue86.com",
  "||5068.com",
  "||51yes.com",
  "||360kuai.com",
  "||tmtpost.com",
  "||airmb.com",
  "||affirm.com",
  "||56.com",
  "||kuaijianji.com",
  "||jqw.com",
  "||yue365.com",
  "||youdao.com",
  "||xiumi.us",
  "||douban.fm",
  "||netease.com",
  "||westarchain.com",
  "||ximalayaos.com",
  "||mybank.cn",
  "||roodoo.net",
  "||ifeng.com",
  "||njupco.com",
  "||gcimg.net",
  "||12306.cn",
  "||xunbaozhifu.com",
  "||hhtravel.com",
  "||lvmama.com",
  "||xiaoka.tv",
  "||yimeishe.com",
  "||amap.com",
  "||sina.com.cn",
  "||yy.com",
  "||mogu.com",
  "||xizhi.com",
  "||examw.com",
  "||sse.com.cn",
  "||1688.com",
  "||houxue.com",
  "||zhimg.com",
  "||huatu.com",
  "||qianzhan.com",
  "||tianyancha.com",
  "||fun.tv",
  "||icourse163.org",
  "||mogu-inc.com",
  "||koowo.com",
  "||hiascend.com",
  "||qiche.com",
  "||zjjubao.com",
  "||chinasspp.com",
  "||sohu.com",
  "||115.com",
  "||9game.cn",
  "||51jiaoxi.com",
  "||wenming.cn",
  "||dianping.com",
  "||mgtv.com",
  "||faloo.com",
  "||tanmizhi.com",
  "||qy.net",
  "||lagou.com",
  "||butian.net",
  "||nicaifu.com",
  "||baidu.com",
  "||12315.cn",
  "||zhibo8.cc",
  "||houzi8.com",
  "||51job.com",
  "||yinyuetai.com",
  "||bitauto.com",
  "||gucheng.com",
  "||zhiding.com.cn",
  "||126.net",
  "||mokahr.com",
  "||legendsec.com",
  "||phb123.com",
  "||kanman.com",
  "||wandoujia.com",
  "||fbook.net",
  "||lolshipin.com",
  "||alihealth.cn",
  "||eduego.com",
  "||lawtime.cn",
  "||huangye88.com",
  "||qianqian.com",
  "||miibeian.gov.cn",
  "||wp.me",
  "||gaosan.com",
  "||youhaosuda.com",
  "||163.com",
  "||herostart.com",
  "||tiaojie.net.cn",
  "||dianzhangzhipin.com",
  "||yhd.com",
  "||mikecrm.com",
  "||hichina.com",
  "||vipshop.com",

];


/*
 * This file is part of Adblock Plus <http://adblockplus.org/>,
 * Copyright (C) 2006-2014 Eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

function createDict()
{
  var result = {};
  result.__proto__ = null;
  return result;
}

function getOwnPropertyDescriptor(obj, key)
{
  if (obj.hasOwnProperty(key))
  {
    return obj[key];
  }
  return null;
}

function extend(subclass, superclass, definition)
{
  if (Object.__proto__)
  {
    definition.__proto__ = superclass.prototype;
    subclass.prototype = definition;
  }
  else
  {
    var tmpclass = function(){}, ret;
    tmpclass.prototype = superclass.prototype;
    subclass.prototype = new tmpclass();
    subclass.prototype.constructor = superclass;
    for (var i in definition)
    {
      if (definition.hasOwnProperty(i))
      {
        subclass.prototype[i] = definition[i];
      }
    }
  }
}

function Filter(text)
{
  this.text = text;
  this.subscriptions = [];
}
Filter.prototype = {
text: null,
subscriptions: null,
toString: function()
  {
    return this.text;
  }
};
Filter.knownFilters = createDict();
Filter.elemhideRegExp = /^([^\/\*\|\@"!]*?)#(\@)?(?:([\w\-]+|\*)((?:\([\w\-]+(?:[$^*]?=[^\(\)"]*)?\))*)|#([^{}]+))$/;
Filter.regexpRegExp = /^(@@)?\/.*\/(?:\$~?[\w\-]+(?:=[^,\s]+)?(?:,~?[\w\-]+(?:=[^,\s]+)?)*)?$/;
Filter.optionsRegExp = /\$(~?[\w\-]+(?:=[^,\s]+)?(?:,~?[\w\-]+(?:=[^,\s]+)?)*)$/;
Filter.fromText = function(text)
{
  if (text in Filter.knownFilters)
  {
    return Filter.knownFilters[text];
  }
  var ret;
  if (text[0] == "!")
  {
    ret = new CommentFilter(text);
  }
  else
  {
    ret = RegExpFilter.fromText(text);
  }
  Filter.knownFilters[ret.text] = ret;
  return ret;
};

function InvalidFilter(text, reason)
{
  Filter.call(this, text);
  this.reason = reason;
}
extend(InvalidFilter, Filter, {
       reason: null
       });

function CommentFilter(text)
{
  Filter.call(this, text);
}
extend(CommentFilter, Filter, {
       });

function ActiveFilter(text, domains)
{
  Filter.call(this, text);
  this.domainSource = domains;
}
extend(ActiveFilter, Filter, {
       domainSource: null,
       domainSeparator: null,
       ignoreTrailingDot: true,
       domainSourceIsUpperCase: false,
       getDomains: function()
       {
       var prop = getOwnPropertyDescriptor(this, "domains");
       if (prop)
       {
       return prop;
       }
       var domains = null;
       if (this.domainSource)
       {
       var source = this.domainSource;
       if (!this.domainSourceIsUpperCase)
       {
       source = source.toUpperCase();
       }
       var list = source.split(this.domainSeparator);
       if (list.length == 1 && list[0][0] != "~")
       {
       domains = createDict();
       domains[""] = false;
       if (this.ignoreTrailingDot)
       {
       list[0] = list[0].replace(/\.+$/, "");
       }
       domains[list[0]] = true;
       }
       else
       {
       var hasIncludes = false;
       for (var i = 0; i < list.length; i++)
       {
       var domain = list[i];
       if (this.ignoreTrailingDot)
       {
       domain = domain.replace(/\.+$/, "");
       }
       if (domain == "")
       {
       continue;
       }
       var include;
       if (domain[0] == "~")
       {
       include = false;
       domain = domain.substr(1);
       }
       else
       {
       include = true;
       hasIncludes = true;
       }
       if (!domains)
       {
       domains = createDict();
       }
       domains[domain] = include;
       }
       domains[""] = !hasIncludes;
       }
       this.domainSource = null;
       }
       return this.domains;
       },
       sitekeys: null,
       isActiveOnDomain: function(docDomain, sitekey)
       {
       if (this.getSitekeys() && (!sitekey || this.getSitekeys().indexOf(sitekey.toUpperCase()) < 0))
       {
       return false;
       }
       if (!this.getDomains())
       {
       return true;
       }
       if (!docDomain)
       {
       return this.getDomains()[""];
       }
       if (this.ignoreTrailingDot)
       {
       docDomain = docDomain.replace(/\.+$/, "");
       }
       docDomain = docDomain.toUpperCase();
       while (true)
       {
       if (docDomain in this.getDomains())
       {
       return this.domains[docDomain];
       }
       var nextDot = docDomain.indexOf(".");
       if (nextDot < 0)
       {
       break;
       }
       docDomain = docDomain.substr(nextDot + 1);
       }
       return this.domains[""];
       },
       isActiveOnlyOnDomain: function(docDomain)
       {
       if (!docDomain || !this.getDomains() || this.getDomains()[""])
       {
       return false;
       }
       if (this.ignoreTrailingDot)
       {
       docDomain = docDomain.replace(/\.+$/, "");
       }
       docDomain = docDomain.toUpperCase();
       for (var domain in this.getDomains())
       {
       if (this.domains[domain] && domain != docDomain && (domain.length <= docDomain.length || domain.indexOf("." + docDomain) != domain.length - docDomain.length - 1))
       {
       return false;
       }
       }
       return true;
       }
       });

function RegExpFilter(text, regexpSource, contentType, matchCase, domains, thirdParty, sitekeys)
{
  ActiveFilter.call(this, text, domains, sitekeys);
  if (contentType != null)
  {
    this.contentType = contentType;
  }
  if (matchCase)
  {
    this.matchCase = matchCase;
  }
  if (thirdParty != null)
  {
    this.thirdParty = thirdParty;
  }
  if (sitekeys != null)
  {
    this.sitekeySource = sitekeys;
  }
  if (regexpSource.length >= 2 && regexpSource[0] == "/" && regexpSource[regexpSource.length - 1] == "/")
  {
    var regexp = new RegExp(regexpSource.substr(1, regexpSource.length - 2), this.matchCase ? "" : "i");
    this.regexp = regexp;
  }
  else
  {
    this.regexpSource = regexpSource;
  }
}
extend(RegExpFilter, ActiveFilter, {
       domainSourceIsUpperCase: true,
       length: 1,
       domainSeparator: "|",
       regexpSource: null,
       getRegexp: function()
       {
       var prop = getOwnPropertyDescriptor(this, "regexp");
       if (prop)
       {
       return prop;
       }
       var source = this.regexpSource.replace(/\*+/g, "*").replace(/\^\|$/, "^").replace(/\W/g, "\\$&").replace(/\\\*/g, ".*").replace(/\\\^/g, "(?:[\\x00-\\x24\\x26-\\x2C\\x2F\\x3A-\\x40\\x5B-\\x5E\\x60\\x7B-\\x7F]|$)").replace(/^\\\|\\\|/, "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?").replace(/^\\\|/, "^").replace(/\\\|$/, "$").replace(/^(\.\*)/, "").replace(/(\.\*)$/, "");
       var regexp = new RegExp(source, this.matchCase ? "" : "i");
       this.regexp = regexp;
       return regexp;
       },
       contentType: 2147483647,
       matchCase: false,
       thirdParty: null,
       sitekeySource: null,
       getSitekeys: function()
       {
       var prop = getOwnPropertyDescriptor(this, "sitekeys");
       if (prop)
       {
       return prop;
       }
       var sitekeys = null;
       if (this.sitekeySource)
       {
       sitekeys = this.sitekeySource.split("|");
       this.sitekeySource = null;
       }
       this.sitekeys = sitekeys;
       return this.sitekeys;
       },
       matches: function(location, contentType, docDomain, thirdParty, sitekey)
       {
       if (this.getRegexp().test(location) && this.isActiveOnDomain(docDomain, sitekey))
       {
       return true;
       }
       return false;
       }
       });
RegExpFilter.prototype["0"] = "#this";
RegExpFilter.fromText = function(text)
{
  var blocking = true;
  var origText = text;
  if (text.indexOf("@@") == 0)
  {
    blocking = false;
    text = text.substr(2);
  }
  var contentType = null;
  var matchCase = null;
  var domains = null;
  var sitekeys = null;
  var thirdParty = null;
  var collapse = null;
  var options;
  var match = text.indexOf("$") >= 0 ? Filter.optionsRegExp.exec(text) : null;
  if (match)
  {
    options = match[1].toUpperCase().split(",");
    text = match.input.substr(0, match.index);
    for (var _loopIndex6 = 0; _loopIndex6 < options.length; ++_loopIndex6)
    {
      var option = options[_loopIndex6];
      var value = null;
      var separatorIndex = option.indexOf("=");
      if (separatorIndex >= 0)
      {
        value = option.substr(separatorIndex + 1);
        option = option.substr(0, separatorIndex);
      }
      option = option.replace(/-/, "_");
      if (option in RegExpFilter.typeMap)
      {
        if (contentType == null)
        {
          contentType = 0;
        }
        contentType |= RegExpFilter.typeMap[option];
      }
      else if (option[0] == "~" && option.substr(1) in RegExpFilter.typeMap)
      {
        if (contentType == null)
        {
          contentType = RegExpFilter.prototype.contentType;
        }
        contentType &= ~RegExpFilter.typeMap[option.substr(1)];
      }
      else if (option == "MATCH_CASE")
      {
        matchCase = true;
      }
      else if (option == "~MATCH_CASE")
      {
        matchCase = false;
      }
      else if (option == "DOMAIN" && typeof value != "undefined")
      {
        domains = value;
      }
      else if (option == "THIRD_PARTY")
      {
        thirdParty = true;
      }
      else if (option == "~THIRD_PARTY")
      {
        thirdParty = false;
      }
      else if (option == "COLLAPSE")
      {
        collapse = true;
      }
      else if (option == "~COLLAPSE")
      {
        collapse = false;
      }
      else if (option == "SITEKEY" && typeof value != "undefined")
      {
        sitekeys = value;
      }
      else
      {
        return new InvalidFilter(origText, "Unknown option " + option.toLowerCase());
      }
    }
  }
  if (!blocking && (contentType == null || contentType & RegExpFilter.typeMap.DOCUMENT) && (!options || options.indexOf("DOCUMENT") < 0) && !/^\|?[\w\-]+:/.test(text))
  {
    if (contentType == null)
    {
      contentType = RegExpFilter.prototype.contentType;
    }
    contentType &= ~RegExpFilter.typeMap.DOCUMENT;
  }
  try
  {
    if (blocking)
    {
      return new BlockingFilter(origText, text, contentType, matchCase, domains, thirdParty, sitekeys, collapse);
    }
    else
    {
      return new WhitelistFilter(origText, text, contentType, matchCase, domains, thirdParty, sitekeys);
    }
  }
  catch (e)
  {
    return new InvalidFilter(origText, e);
  }
};
RegExpFilter.typeMap = {
OTHER: 1,
SCRIPT: 2,
IMAGE: 4,
STYLESHEET: 8,
OBJECT: 16,
SUBDOCUMENT: 32,
DOCUMENT: 64,
XBL: 1,
PING: 1,
XMLHTTPREQUEST: 2048,
OBJECT_SUBREQUEST: 4096,
DTD: 1,
MEDIA: 16384,
FONT: 32768,
BACKGROUND: 4,
POPUP: 268435456,
ELEMHIDE: 1073741824
};
RegExpFilter.prototype.contentType &= ~ (RegExpFilter.typeMap.ELEMHIDE | RegExpFilter.typeMap.POPUP);

function BlockingFilter(text, regexpSource, contentType, matchCase, domains, thirdParty, sitekeys, collapse)
{
  RegExpFilter.call(this, text, regexpSource, contentType, matchCase, domains, thirdParty, sitekeys);
  this.collapse = collapse;
}
extend(BlockingFilter, RegExpFilter, {
       collapse: null
       });

function WhitelistFilter(text, regexpSource, contentType, matchCase, domains, thirdParty, sitekeys)
{
  RegExpFilter.call(this, text, regexpSource, contentType, matchCase, domains, thirdParty, sitekeys);
}
extend(WhitelistFilter, RegExpFilter, {
       });

function Matcher()
{
  this.clear();
}
Matcher.prototype = {
filterByKeyword: null,
keywordByFilter: null,
clear: function()
  {
    this.filterByKeyword = createDict();
    this.keywordByFilter = createDict();
  },
add: function(filter)
  {
    if (filter.text in this.keywordByFilter)
    {
      return;
    }
    var keyword = this.findKeyword(filter);
    var oldEntry = this.filterByKeyword[keyword];
    if (typeof oldEntry == "undefined")
    {
      this.filterByKeyword[keyword] = filter;
    }
    else if (oldEntry.length == 1)
    {
      this.filterByKeyword[keyword] = [oldEntry, filter];
    }
    else
    {
      oldEntry.push(filter);
    }
    this.keywordByFilter[filter.text] = keyword;
  },
remove: function(filter)
  {
    if (!(filter.text in this.keywordByFilter))
    {
      return;
    }
    var keyword = this.keywordByFilter[filter.text];
    var list = this.filterByKeyword[keyword];
    if (list.length <= 1)
    {
      delete this.filterByKeyword[keyword];
    }
    else
    {
      var index = list.indexOf(filter);
      if (index >= 0)
      {
        list.splice(index, 1);
        if (list.length == 1)
        {
          this.filterByKeyword[keyword] = list[0];
        }
      }
    }
    delete this.keywordByFilter[filter.text];
  },
findKeyword: function(filter)
  {
    var result = "";
    var text = filter.text;
    if (Filter.regexpRegExp.test(text))
    {
      return result;
    }
    var match = Filter.optionsRegExp.exec(text);
    if (match)
    {
      text = match.input.substr(0, match.index);
    }
    if (text.substr(0, 2) == "@@")
    {
      text = text.substr(2);
    }
    var candidates = text.toLowerCase().match(/[^a-z0-9%*][a-z0-9%]{3,}(?=[^a-z0-9%*])/g);
    if (!candidates)
    {
      return result;
    }
    var hash = this.filterByKeyword;
    var resultCount = 16777215;
    var resultLength = 0;
    for (var i = 0, l = candidates.length; i < l; i++)
    {
      var candidate = candidates[i].substr(1);
      var count = candidate in hash ? hash[candidate].length : 0;
      if (count < resultCount || count == resultCount && candidate.length > resultLength)
      {
        result = candidate;
        resultCount = count;
        resultLength = candidate.length;
      }
    }
    return result;
  },
hasFilter: function(filter)
  {
    return filter.text in this.keywordByFilter;
  },
getKeywordForFilter: function(filter)
  {
    if (filter.text in this.keywordByFilter)
    {
      return this.keywordByFilter[filter.text];
    }
    else
    {
      return null;
    }
  },
_checkEntryMatch: function(keyword, location, contentType, docDomain, thirdParty, sitekey)
  {
    var list = this.filterByKeyword[keyword];
    for (var i = 0; i < list.length; i++)
    {
      var filter = list[i];
      if (filter == "#this")
      {
        filter = list;
      }
      if (filter.matches(location, contentType, docDomain, thirdParty, sitekey))
      {
        return filter;
      }
    }
    return null;
  },
matchesAny: function(location, contentType, docDomain, thirdParty, sitekey)
  {
    var candidates = location.toLowerCase().match(/[a-z0-9%]{3,}/g);
    if (candidates === null)
    {
      candidates = [];
    }
    candidates.push("");
    for (var i = 0, l = candidates.length; i < l; i++)
    {
      var substr = candidates[i];
      if (substr in this.filterByKeyword)
      {
        var result = this._checkEntryMatch(substr, location, contentType, docDomain, thirdParty, sitekey);
        if (result)
        {
          return result;
        }
      }
    }
    return null;
  }
};

function CombinedMatcher()
{
  this.blacklist = new Matcher();
  this.whitelist = new Matcher();
  this.resultCache = createDict();
}
CombinedMatcher.maxCacheEntries = 1000;
CombinedMatcher.prototype = {
blacklist: null,
whitelist: null,
resultCache: null,
cacheEntries: 0,
clear: function()
  {
    this.blacklist.clear();
    this.whitelist.clear();
    this.resultCache = createDict();
    this.cacheEntries = 0;
  },
add: function(filter)
  {
    if (filter instanceof WhitelistFilter)
    {
      this.whitelist.add(filter);
    }
    else
    {
      this.blacklist.add(filter);
    }
    if (this.cacheEntries > 0)
    {
      this.resultCache = createDict();
      this.cacheEntries = 0;
    }
  },
remove: function(filter)
  {
    if (filter instanceof WhitelistFilter)
    {
      this.whitelist.remove(filter);
    }
    else
    {
      this.blacklist.remove(filter);
    }
    if (this.cacheEntries > 0)
    {
      this.resultCache = createDict();
      this.cacheEntries = 0;
    }
  },
findKeyword: function(filter)
  {
    if (filter instanceof WhitelistFilter)
    {
      return this.whitelist.findKeyword(filter);
    }
    else
    {
      return this.blacklist.findKeyword(filter);
    }
  },
hasFilter: function(filter)
  {
    if (filter instanceof WhitelistFilter)
    {
      return this.whitelist.hasFilter(filter);
    }
    else
    {
      return this.blacklist.hasFilter(filter);
    }
  },
getKeywordForFilter: function(filter)
  {
    if (filter instanceof WhitelistFilter)
    {
      return this.whitelist.getKeywordForFilter(filter);
    }
    else
    {
      return this.blacklist.getKeywordForFilter(filter);
    }
  },
isSlowFilter: function(filter)
  {
    var matcher = filter instanceof WhitelistFilter ? this.whitelist : this.blacklist;
    if (matcher.hasFilter(filter))
    {
      return !matcher.getKeywordForFilter(filter);
    }
    else
    {
      return !matcher.findKeyword(filter);
    }
  },
matchesAnyInternal: function(location, contentType, docDomain, thirdParty, sitekey)
  {
    var candidates = location.toLowerCase().match(/[a-z0-9%]{3,}/g);
    if (candidates === null)
    {
      candidates = [];
    }
    candidates.push("");
    var blacklistHit = null;
    for (var i = 0, l = candidates.length; i < l; i++)
    {
      var substr = candidates[i];
      if (substr in this.whitelist.filterByKeyword)
      {
        var result = this.whitelist._checkEntryMatch(substr, location, contentType, docDomain, thirdParty, sitekey);
        if (result)
        {
          return result;
        }
      }
      if (substr in this.blacklist.filterByKeyword && blacklistHit === null)
      {
        blacklistHit = this.blacklist._checkEntryMatch(substr, location, contentType, docDomain, thirdParty, sitekey);
      }
    }
    return blacklistHit;
  },
matchesAny: function(location, docDomain)
  {
    var key = location + " " + docDomain + " ";
    if (key in this.resultCache)
    {
      return this.resultCache[key];
    }
    var result = this.matchesAnyInternal(location, 0, docDomain, null, null);
    if (this.cacheEntries >= CombinedMatcher.maxCacheEntries)
    {
      this.resultCache = createDict();
      this.cacheEntries = 0;
    }
    this.resultCache[key] = result;
    this.cacheEntries++;
    return result;
  }
};
var defaultMatcher = new CombinedMatcher();

var direct = 'DIRECT;';

for (var i = 0; i < rules.length; i++) {
  defaultMatcher.add(Filter.fromText(rules[i]));
}

function FindProxyForURL(url, host) {
  if (defaultMatcher.matchesAny(url, host) instanceof BlockingFilter) {
    return proxy;
  }
  return direct;
}
