from itertools import combinations

kevin_artists = {"Halsey", "Taylor Swift", "Mitski", "Joji", "Shawn Mendes", "Sabrina Carpenter", "Nicky Minaj", "Conan Gray", "One Direction", "Justin Bieber"}
stuart_artists = {"Kendrick Lamar", "Steve Lacy", "Tyler the Creator", "Joji", "TheWeeknd", "Coldplay", "Kanye West", "Travis Scott", "Frank Ocean", "Brent Faiyaz"}
bob_artists = {"Conan Gray", "Joji", "Dove Cameron", "Mitski", "Arctic Monkeys", "Steve Lacy", "Kendrick Lamar", "Isabel LaRosa", "Shawn Mendes", "Coldplay"}
edith_artists = {"Metallica", "Billie Eilish", "TheWeeknd", "Mitski", "NF", "Conan Gray", "Kendrick Lamar", "Nicky Minaj", "Kanye West", "Coldplay"}


djs = {
    "Kevin": kevin_artists,
    "Stuart": stuart_artists,
    "Bob": bob_artists,
    "Edith": edith_artists
}

def calculate_overlap(set1, set2):
    common_artists = set1.intersection(set2)
    if not set1 or not set2:  
        return 0, 0
    overlap1 = len(common_artists) / len(set1) * 100
    overlap2 = len(common_artists) / len(set2) * 100
    return overlap1, overlap2


compatible_pairs = []

for (dj1, artists1), (dj2, artists2) in combinations(djs.items(), 2):
    overlap1, overlap2 = calculate_overlap(artists1, artists2)
    print(f"{dj1} and {dj2}: overlap1 = {overlap1:.2f}, overlap2 = {overlap2:.2f}") 
    
    if overlap1 >= 30 and overlap2 >= 30:
        average_overlap = (overlap1 + overlap2) / 2
        compatible_pairs.append(((dj1, dj2), average_overlap))

compatible_pairs.sort(key=lambda x: x[1], reverse=True)


for pair, overlap in compatible_pairs:
    print(f"DJ Pair: {pair}, Average Overlap: {overlap:.2f}%")
