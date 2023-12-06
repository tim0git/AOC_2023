package main

import (
	"math/big"
	"testing"
)

func TestPart1(t *testing.T) {
	testCases := []struct {
		duration       int
		recordDistance int
		expectedWays   int
	}{
		{63, 411, 48},  // Update the expected values based on your calculations
		{78, 1274, 31}, // Add more test cases as needed
		{94, 2047, 25},
		{68, 1035, 21},
	}

	for _, tc := range testCases {
		result := Part1(tc.duration, tc.recordDistance)

		if result != tc.expectedWays {
			t.Errorf("For duration %d and record distance %d, expected %d ways, but got %d", tc.duration, tc.recordDistance, tc.expectedWays, result)
		}
	}
}

func TestPart2(t *testing.T) {
	testCases := []struct {
		durationStr       string
		recordDistanceStr string
		expectedWays      int
	}{
		{"63789468", "411127420471035", 0},
	}

	for _, tc := range testCases {
		duration, success := new(big.Int).SetString(tc.durationStr, 10)
		if !success {
			t.Errorf("Failed to parse duration: %s", tc.durationStr)
			continue
		}

		recordDistance, success := new(big.Int).SetString(tc.recordDistanceStr, 10)
		if !success {
			t.Errorf("Failed to parse record distance: %s", tc.recordDistanceStr)
			continue
		}

		result := Part2(duration, recordDistance)

		if result != tc.expectedWays {
			t.Errorf("For duration %s and record distance %s, expected %d ways, but got %d", tc.durationStr, tc.recordDistanceStr, tc.expectedWays, result)
		}
	}
}
