package fypapplication

class Industry {

    String name

    static belongsTo = [sector: Sector]

    static constraints = {
        name(unique: true)
    }
}
