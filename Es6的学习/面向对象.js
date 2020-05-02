class User {
    constructor(name, sex) {
        this.name = name,
            this.sex = sex
    }
    showMessage() {
        console.log(this.name)
    }
    say() {
        console.log(this.sex)
    }
}

let user = new User('张飒', 'nv')
user.say()
user.showMessage()

/**
 * 继承
 */

class vipUser extends User {
    constructor(name, sex, level) {
        super(name, sex)
        this.level = level
    }
    showVipLevel() {
        console.log(this.level)
    }
}

let vipuser = new vipUser('李四', '女', 3)
vipuser.showMessage()
vipuser.showVipLevel()
vipuser.say()