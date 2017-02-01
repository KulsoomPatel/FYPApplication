package fypapplication

class Sector {

    String name

    static hasMany = [industries: Industry]

    static constraints = {
        name(unique: true)
    }
}
