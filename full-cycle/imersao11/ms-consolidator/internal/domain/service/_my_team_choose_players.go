package service

import (
	"errors"

	"github.com/abehidek/sandbox/internal/domain/entity"
)

func ChoosePlayers(myTeam *entity.MyTeam, players []entity.Player) error {
	totalCost := 0.0
	totalEarned := 0.0

	for _, player := range players {
		if playerInMyTeam(player, myTeam) && !playerInPlayersList(player, &players) {
			totalEarned += player.Price // selling player
		}

		if !playerInMyTeam(player, myTeam) && playerInPlayersList(player, &players) {
			totalCost += player.Price // buying player
		}

		if totalCost > myTeam.Score+totalEarned {
			return errors.New("not enough money")
		}

		// adjust the score of team

		myTeam.Score += totalEarned - totalCost
		myTeam.Players = []string{} // nullify the team's list of players

		for _, player = range players {
			myTeam.Players = append(myTeam.Players, player.ID) // append the new players to the team's list of players
		}
	}
	return nil
}

func playerInMyTeam(player entity.Player, myTeam entity.MyTeam) bool {
	for _, playerID := range myTeam.Players {
		if player.ID == playerID {
			return true
		}
	}
	return false
}

func playerInPlayersList(player entity.Player, players *[]entity.Player) bool {
	for _, p := range *players {
		if player.ID == p.ID {
			return true
		}
	}
	return false
}
