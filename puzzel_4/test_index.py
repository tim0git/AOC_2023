import unittest
from index import calculate_points, calculate_winning_scratchcards


class TestCalculatePoints(unittest.TestCase):
    def test_returns_13_when_provided_test_data(self):
        file_path = "input.txt"
        with open(file_path, "r") as file:
            cards = file.read().splitlines()
            cards_without_prefix = [card.split(': ', 1)[1] for card in cards]

        total_points = calculate_points(cards_without_prefix)
        self.assertEqual(total_points, 13)

    def test_returns_28538_when_provided_puzzle_data(self):
        file_path = "input.real.txt"
        with open(file_path, "r") as file:
            cards = file.read().splitlines()
            cards_without_prefix = [card.split(': ', 1)[1] for card in cards]

        total_points = calculate_points(cards_without_prefix)
        self.assertEqual(total_points, 28538)


class TestCalculatesWinningScratchCards(unittest.TestCase):
    def test_returns_30_when_provided_test_data(self):
        file_path = "./input.txt"
        with open(file_path, "r") as file:
            cards = file.read().splitlines()
            cards_without_prefix = [card.split(': ', 1)[1] for card in cards]

        total_points = calculate_winning_scratchcards(cards_without_prefix)
        self.assertEqual(total_points, 30)


if __name__ == '__main__':
    unittest.main()
