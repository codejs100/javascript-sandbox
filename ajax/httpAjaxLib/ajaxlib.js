function AjaxLib() {
    this.http = new XMLHttpRequest();
}

AjaxLib.prototype.open = function(method, url, async) {
    this.http.open(method, url, async);
}

AjaxLib.prototype.send  = function(data) {
    (data)? this.http.send(data) : this.http.send();
}

AjaxLib.prototype.load = function(callback) {
    this.http.onload = callback;
}

AjaxLib.prototype.contentType = function() {
    this.http.setRequestHeader('Content-type', 'application/json');
}

AjaxLib.prototype.get = function(url, callback) {
    let _this = this;
    this.open('GET', url, true);
    this.load(function() {
        if(_this.http.status == 200) {
            callback(null, _this.http.responseText);
        } else {
            callback('Some error occurred in Get.', null);
        }
    });
    this.send(null);
}

AjaxLib.prototype.post = function(url, data, callback) {
    let _this = this;
    this.open('POST', url, true);
    this.contentType();
    this.load(function() {
        if(_this.http.status == 201) {
            callback(null, _this.http.responseText);
        } else {
            callback('Some error occurred in Post.', null);
        }
    })
    this.send(JSON.stringify(data));
}

AjaxLib.prototype.put = function(url, data, callback) {
    let _this = this;
    this.open('PUT', url, true);
    this.contentType();
    this.load(function() {
        callback(null, _this.http.responseText);
    })
    this.send(JSON.stringify(data));
}

AjaxLib.prototype.delete = function(url, callback) {
    let _this = this;
    this.open('DELETE', url, true);
    this.load(function() {
        if(_this.http.status == 200) {
            callback(null, 'Deleted sucessfully');
        } else {
            callback('Some error occurred in Get.', null);
        }
    });
    this.send(null);
}