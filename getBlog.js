'use strict';

var scraper = require('website-scraper');
var request = require('request');
var rp = require('request-promise');
const gitApi = 'https://api.github.com/repos/jkaffrey/githubblog/contents';

var options = {
  url: 'https://api.github.com/repos/jkaffrey/githubblog/contents',
  headers: {
    'User-Agent': 'request'
  }
};

var downloads = [];

rp(options).then(function (body) {

  var jObj = JSON.parse(body);
  var dirs = [];

  for (var thing in jObj) {
    if (jObj[thing].type === 'dir') {

      dirs.push(jObj[thing].url);
      //console.log(jObj[thing].name);
    } else if (jObj[thing].type === 'file' && jObj[thing].name.indexOf('.md') >= 0) {

      console.log(jObj[thing].name);
      downloads.push(jObj[thing].download_url);
    }
  }

  while (dirs.length !== 0) {

    var url = dirs.pop();
    var options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      }
    };

    rp(options).then(function (info) {

      jObj = JSON.parse(info);
      for (var thing in jObj) {
        if (jObj[thing].type === 'dir') {

          dirs.push(jObj[thing].url);
          //console.log(jObj[thing].name);
        } else if (jObj[thing].type === 'file' && jObj[thing].name.indexOf('.md') >= 0) {

          console.log(jObj[thing].name);
          downloads.push(jObj[thing].download_url);
        }
      }
    });
  }
}).then(function (data) {

  var options = {
    urls: downloads,
    directory: './filesGot',
    filenameGenerator: 'bySiteStructure'
  };

  scraper.scrape(options).then(function (result) {

    console.log(result);
  }).catch(console.log);
});
