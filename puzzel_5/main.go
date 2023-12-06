package main

import (
	"fmt"
	"sync"
	"time"
)

func Part1(duration, recordDistance int, wg *sync.WaitGroup, resultChan chan<- int) {
	defer wg.Done()

	count := 0
	for holdDuration := 0; holdDuration < duration; holdDuration++ {
		speed := holdDuration
		remainingTime := duration - holdDuration
		distance := speed * remainingTime
		if distance > recordDistance {
			count++
		}
	}

	resultChan <- count
}

func Part2(duration, recordDistance int, wg *sync.WaitGroup, resultChan chan<- int) {
	defer wg.Done()

	count := 0
	for holdDuration := 0; holdDuration < duration; holdDuration++ {
		speed := holdDuration
		remainingTime := duration - holdDuration
		distance := speed * remainingTime
		if distance > recordDistance {
			count++
		}
	}

	resultChan <- count
}

func main() {
	startTime := time.Now()

	var wg sync.WaitGroup
	resultChan := make(chan int, 2)

	wg.Add(4)
	go Part1(63, 411, &wg, resultChan)
	go Part1(78, 1274, &wg, resultChan)
	go Part1(94, 2047, &wg, resultChan)
	go Part1(68, 1035, &wg, resultChan)

	wg.Add(1)
	go Part2(63789468, 411127420471035, &wg, resultChan)

	go func() {
		wg.Wait()
		close(resultChan)
	}()

	race1 := <-resultChan
	race2 := <-resultChan
	race3 := <-resultChan
	race4 := <-resultChan
	part1Result := race1 * race2 * race3 * race4

	fmt.Println("Number of ways to beat the record in Race 1:", race1)
	fmt.Println("Number of ways to beat the record in Race 2:", race2)
	fmt.Println("Number of ways to beat the record in Race 3:", race3)
	fmt.Println("Number of ways to beat the record in Race 4:", race4)
	fmt.Println("Result (product of all races):", part1Result)

	elapsedTime := time.Since(startTime)
	fmt.Printf("Program execution took %s\n", elapsedTime)
}
