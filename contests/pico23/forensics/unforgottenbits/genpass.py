with open("champions.txt", "r") as fi, open("passwords.txt", "w") as fo:
    a = fi.read().split("\n")

    for i in a:
        for j in a:
            fo.write("yasuoaatrox{}{}\n".format(i, j).lower())
