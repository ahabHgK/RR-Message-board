var msgDisplay = document.getElementById('msg-block')
var btn = document.getElementById('submit')
var i = 0

function addMsg() {
    var msg = document.getElementById('leave-msg').value
    var userName = document.getElementById('user-name').value

    if (userName === '' && msg === '') {
        alert('请输入昵称和留言内容。')
    } else if (userName === '') {
        alert('请输入昵称。')
    } else if (userName.length > 5) {
        alert('请重新输入昵称，少于五个字。')
        document.getElementById('user-name').value = ''
    } else if (msg === '') {
        alert('请输入留言内容。')
    } else {
        document.getElementById('msg-block').insertAdjacentHTML('beforeend',
            '<div class="msg-box" id=' + `mb${i}` + '></div>')
        var parent = document.getElementById(`mb${i}`)
        parent.insertAdjacentHTML('beforeend',
            '<p class="user-name-css" id=' + `un${i}` + '></p>')
        parent.insertAdjacentHTML('beforeend',
            '<p class="msg-css" id=' + `mc${i}` + '></p>')
        parent.insertAdjacentHTML('beforeend',
            '<div class="UA-OS-display">' + getUA() + ' on ' + getOS() + '</div>')
        parent.insertAdjacentHTML('beforeend',
            '<div class="nice-display" id=' + `nd${i}` + '></div>')
        parent.insertAdjacentHTML('beforeend',
            '<button class="nice" type="button" id=' + `nice${i}` + '></button>')
        parent.insertAdjacentHTML('beforeend',
            '<button class="talk" type="button" id=' + `talk${i}` + '></button>')
        parent.insertAdjacentHTML('beforeend',
            '<div class="talk-display" id=' + `td${i}` + '></div>')
        document.getElementById(`nd${i}`).insertAdjacentHTML('beforeend',
            '<div id=' + `good-display${i}` + ' style="display: none">👍</div>')
        document.getElementById(`nd${i}`).insertAdjacentHTML('beforeend',
            '<div id=' + `haha-display${i}` +' style="display: none">😄</div>')
        document.getElementById(`nd${i}`).insertAdjacentHTML('beforeend',
            '<div id=' + `mid-display${i}` + ' style="display: none">👎</div>')
        document.getElementById(`un${i}`).innerHTML = userName
        document.getElementById(`mc${i}`).innerHTML = ' : ' + msg
        document.getElementById('leave-msg').value = ''
    }
}

function addNice(niceId) {
    var niceParent = document.getElementById(niceId)
    niceParent.insertAdjacentHTML('beforeend',
        '<button id=' + `good${niceId[4]}` + ' class="good" type="button">👍</button>'
    )
    niceParent.insertAdjacentHTML('beforeend',
        '<button id=' + `haha${niceId[4]}` + ' class="haha" type="button">😄</button>'
    )
    niceParent.insertAdjacentHTML('beforeend',
        '<button id=' + `mid${niceId[4]}` + ' class="mid" type="button">👎</button>'
    )
}

function talkBack(talkId) {
    var talkBackCon = prompt('请输入回复该条留言的内容：')
    document.getElementById(`td${talkId[4]}`).innerHTML = '回复 ：' + talkBackCon
}

function getUA() {
    if (/edge/i.test(navigator.userAgent)) {
        return 'Edge'
    } else if (/chrome/i.test(navigator.userAgent)) {
        return 'Chrome'
    } else if (/safari/i.test(navigator.userAgent)) {
        return 'Safari'
    } else if (/firefox/i.test(navigator.userAgent)) {
        return 'Firefox'
    } else if (/msie/i.test(navigator.userAgent)) {
        return 'IE(8-10)'
    } else {
        return '其他浏览器'
    }
}

function getOS() {
    if (/android/i.test(navigator.userAgent)) {
        return 'Android'
    } else if (/iphone/i.test(navigator.userAgent)) {
        return 'iphone'
    } else if (/ipad/i.test(navigator.userAgent)) {
        return 'ipad'
    } else if (/linux/i.test(navigator.userAgent)) {
        return 'Linux'
    } else if (/windows nt 10/i.test(navigator.userAgent)) {
        return 'Windows 10'
    } else if (/windows ni 6.1/i.test(navigator.userAgent)) {
        return 'Windows 7'
    } else if (/macintosh/i.test(navigator.userAgent)) {
        return 'Macintosh'
    } else {
        return '其他设备'
    }
}

btn.onclick = function() {
    i++
    addMsg()
}

document.getElementById('msg-block').addEventListener('click', function(e) {
    switch (e.target.className) {
        case 'talk':
            var talkId = e.target.id
            talkBack(talkId)
            break;
        case 'nice':
            var niceId = e.target.id
            document.getElementById(niceId).innerHTML === ''
                ? (addNice(niceId))
                : (document.getElementById(niceId).innerHTML = '')
            break;
        case 'good':
            var goodId = e.target.id
            document.getElementById(`good-display${goodId[4]}`).style.display === 'none'
                ?(document.getElementById(`good-display${goodId[4]}`).style.display = 'inline-block')
                :(document.getElementById(`good-display${goodId[4]}`).style.display = 'none')
            break;
        case 'haha':
            var hahaId = e.target.id
            document.getElementById(`haha-display${hahaId[4]}`).style.display === 'none'
                ? (document.getElementById(`haha-display${hahaId[4]}`).style.display = 'inline-block')
                : (document.getElementById(`haha-display${hahaId[4]}`).style.display = 'none')
            break;
        case 'mid':
            var midId = e.target.id
            document.getElementById(`mid-display${midId[3]}`).style.display === 'none'
                ? (document.getElementById(`mid-display${midId[3]}`).style.display = 'inline-block')
                : (document.getElementById(`mid-display${midId[3]}`).style.display = 'none')
        default:
            break;
    }
})
