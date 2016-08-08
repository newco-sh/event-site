var _hosts = {
  'Robin8': {
    name: 'Robin8',
    logo: 'img/hosts/Robin8.png',
    presenter: 'Miranda Tan',
    lang: 'EN',
    position: 'CEO',
    industry: 'Social App',
    p_intro: {
      en: 'Miranda Tan has more than 10 years experience in public relations, marketing, and tech. Miranda has a BS from Cornell University and a JD from St. John’s University School of Law.',
      zh: ''
    },
    intro: {
      en: "ROBIN8 makes reaching out to reporters and influencers effortless and effective. We're changing the face of PR with technology that's been years in the making.",
      zh: ''
    }
  },
  'Italki': {
    name: 'Italki',
    logo: 'img/hosts/italki.png',
    presenter: 'Kevin Chen',
    lang: 'EN',
    position: 'CEO',
    industry: 'EduTech',
    p_intro: {
      en: 'Kevin Chen is co-founder of italki.com. Previously, he co-founded famento.com, and worked in financial research. He is active in the Shanghai startup community through techyizu.org and xinchejian.com.',
      zh: ''
    },
    intro: {
      en: 'On italki you can find the best online language teachers from around the world. italki is the world leader in online language education with over 1.2 million students and 1500+ teachers of 100 languages.',
      zh: ''
    }
  },
  'ChinaNetCloud': {
    name: 'ChinaNetCloud',
    logo: 'img/hosts/ChinaNetCloud.png',
    presenter: 'Steve Mushero',
    lang: 'EN',
    position: 'CEO',
    industry: 'Cloud Services',
    p_intro: {
      en: 'Mr. Steve Mushero co-founded ChinaNetCloud in 2008 and serves as its Chief Technology Officer and Chief Executive Officer. Mr. Mushero served as the Chief Technical Officer of Tudou Holdings Limited. He has over 20 years of technology management experience across a wide range of industries and international contexts. ',
      zh: ''
    },
    intro: {
      en: "The world's largest Internet server management company, and China's oldest Cloud Computing business.",
      zh: ''
    }
  },
  'FotoPlace': {
    name: 'FotoPlace 足记',
    logo: 'img/hosts/FotoPlace足记.png',
    presenter: '杨柳/Yang Liu',
    lang: 'CN',
    position: 'CEO',
    industry: 'Social App',
    p_intro: {
      en: '',
      zh: '杨柳，70后白羊座，风风火火恍恍惚惚。。上海师范大学影视戏剧文学专业毕业。作为一个长期电影中毒者，十几年工龄却没有从事与电影相关的工作。2014年，人到中年，无心插柳意外开始创业。当初喜欢的专业与十来年的工作经历终于殊途同归，可见一切自有妥帖的安排。作为「足记」APP的创始人，也是「足记」最大的“bug”（据旁人追忆，此语出自某次醉生梦死后）。非典型互联网产品汪，女汉砸，记性不好，智商堪忧，懒散，好吃，代谢慢，不运动，胖，不好看，心大，学渣一枚。闪闪发亮的深井冰。一个看起来奔放，但本质上内向的人，尴尬症晚期患者，不擅应对各类冷场。'
    },
    intro: {
      en: 'An image-based social App using movie language to record life.',
      zh: '足记是一款用电影语言记录生活的图片社交应用。通过足记，可以轻松将普通照片制作成充满电影感的图片，将平凡生活记录成电影，做自己生活的导演。同时，在足记中还可以查找电影取景地，跟随电影足迹、名人与历史的足迹发现身边的美。足记在2014年12月上线正式版本，2015年2月初增加了大片模式，随后在朋友圈引爆了3000万用户的电影情怀，横扫几十个国家的摄影排行榜榜首。'
    }
  },
  'Teambition': {
    name: 'Teambition',
    logo: 'img/hosts/Teambition.png',
    presenter: 'Yaqian Wang/王雅倩',
    lang: 'CN/EN',
    position: 'COO',
    industry: 'Corporate services',
    p_intro: {
      en: "<p>Yaqian Wang joined Teambition in 2014 when the company was still a startup with about 20 people. As COO of Teambition, Yaqian is response for HR, finance and the company's daily operations. She also works closely with the CEO and other leaders to make sure every department and team collaborate smoothly. in 2016, Teambition has 120 employees in 7 cities in China.</p><p>Yaqian hold a PhD in Economics from Lund University in Sweden and Master in Organisational Psychology from Shanghai Jiao Tong University. Before joining Teambition, Yaqian was a researcher at Lund Institute of Economic Research and working on a learning partnership between Lund University and SCA Packaging, in which she worked as a consultant for the company on innovation and organisational culture. She also has worked at McKinsey Company in Shanghai and Italy Cement Group in Milan.</p>",
      zh: '上海交通大学管理学学士，应用心理学硕士，瑞典隆德大学管理学博士。博士期间在欧洲最大的包装公司 SCA Packaging 三个欧洲分公司进行组织创新文化的研究，并曾在麦肯锡公司上海分公司，意大利水泥集团米兰总部工作实习。2014年博士毕业回国后加入 Teambition，负责公司内部运营，带领 Teambition 从20多个人成长为100+人。'
    },
    intro: {
      en: '',
      zh: ''
    }
  }
};
// var _lang = 'en';
// $('.toggle-translation').click(function(e) {
//   e.preventDefault();
//   if (_lang === 'en') {
//     $('.lang-zh').removeClass('hidden');
//     $('.lang-en').addClass('hidden');
//     _lang = 'zh';
//   } else {
//     $('.lang-zh').addClass('hidden');
//     $('.lang-en').removeClass('hidden');
//     _lang = 'en';
//   }
//   $('html').attr('lang', _lang);
// });
$('.close-modal').click(function(e) {
  $($(this).attr('data-target')).modal('hide');
});
$('.host-trigger').click(function(e) {
  e.preventDefault();
  $('#host-modal').modal('show');
});
$('#full-page').fullpage({
  menu: '#top-nav',
  autoScrolling: false,
  fitToSection: false,
  controlArrows: false,
  touchSensitivity: 30,
  afterLoad: function(anchorLink, index) {
    $('#top-nav .navbar-brand')[index === 1 ? 'removeClass' : 'addClass']('tiny');
    $('#top-nav .navbar-brand>.brand-date')[index === 1 ? 'removeClass' : 'addClass']('hidden');
    $('#top-nav #navbar-home')[index === 1 ? 'addClass' : 'removeClass']('hidden');
    $('#top-nav')[index > 1 ? 'addClass' : 'removeClass']('inverse');
    $('#top-nav .navbar-about-sub')[anchorLink.indexOf('about') > -1 ? 'removeClass' : 'addClass']('hidden');
  }
});
$(function() {
  setTimeout(function deferImg() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
      }
    }
  }, 0);
  var egg = new Egg('up,up,down,down,left,right,left,right,b,a', function() {
    $('#rock-lobster').modal('show');
    window.setTimeout(function() {
      $('#rock-lobster').modal('hide');
    }, 5000);
  }).listen();
  var binding = new Vue({
    el: 'body',
    data: {
      selected_host: 'Robin8',
      hosts: _hosts,
      en: true
    },
    computed: {
      host: function() {
        return this.hosts[this.selected_host];
      }
    },
    methods: {
      toggleLang: function(e) {
        e.preventDefault();
        this.en = !this.en;
        $('html').attr('lang', this.en ? 'en' : 'zh');
      }
    }
  });
});
