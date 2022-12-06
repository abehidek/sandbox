import pygame
import random

from pygame.locals import *

display_x = 600
display_y = 600
game_block = 20
game_speed = 20

pygame.init()
screen = pygame.display.set_mode((display_x, display_y))
pygame.display.set_caption('Snake')
while True:

    # helper functions
    def on_grid_random():
        x = random.randint(0, display_x - game_block)
        y = random.randint(0, display_y - game_block)
        return x // game_block * game_block, y // game_block * game_block


    def collision(c1, c2):
        return (c1[0] == c2[0]) and (c1[1] == c2[1])


    # definition for snake movement
    UP = 0
    RIGHT = 1
    DOWN = 2
    LEFT = 3

    # setting initial conditions for the game:
    snake = [(20 * game_block, 20 * game_block), (21 * game_block, 20 * game_block), (22 * game_block, 20 * game_block)]
    snake_skin = pygame.Surface((game_block, game_block))
    snake_skin.fill((255, 255, 255))  # filling snake skin with white color
    snake_direction = LEFT
    apple_pos = on_grid_random()
    apple = pygame.Surface((game_block, game_block))
    apple.fill((255, 0, 0))  # filling apple skin with red color

    score = 0
    game_over = False
    while not game_over:
        pygame.time.Clock().tick(game_speed)
        for event in pygame.event.get():

            if event.type == QUIT:
                pygame.quit()
                exit()

            if event.type == KEYDOWN:
                keys = pygame.key.get_pressed()
                if (keys[pygame.K_UP] == True) and (keys[pygame.K_DOWN] != True) and snake_direction != DOWN:
                    snake_direction = UP
                if (keys[pygame.K_DOWN] == True) and (keys[pygame.K_UP] != True) and snake_direction != UP:
                    snake_direction = DOWN
                if (keys[pygame.K_RIGHT] == True) and (keys[pygame.K_DOWN] != True) and (keys[pygame.K_UP] != True) and (keys[pygame.K_LEFT] != True) and snake_direction != LEFT:
                    snake_direction = RIGHT
                if (keys[pygame.K_LEFT] == True) and (keys[pygame.K_DOWN] != True) and (keys[pygame.K_UP] != True)  and (keys[pygame.K_RIGHT] != True) and snake_direction != RIGHT:
                    snake_direction = LEFT

        # score system
        if collision(snake[0], apple_pos):
            apple_pos = on_grid_random()
            snake.append((0, 0))
            score += 1

        # Check if snake collided with boundaries
        if snake[0][0] == display_x or snake[0][1] == display_y or snake[0][0] < 0 or snake[0][1] < 0:
            game_over = True
            break

        # Check if the snake has hit itself
        for i in range(1, len(snake) - 1):
            if snake[0][0] == snake[i][0] and snake[0][1] == snake[i][1]:
                game_over = True
                break

        # makes the body of the snake follows the head
        for i in range(len(snake) - 1, 0, -1):
            snake[i] = (snake[i - 1][0], snake[i - 1][1])

        # changes the direction of the movement of the snake
        if snake_direction == UP:
            snake[0] = (snake[0][0], snake[0][1] - game_block)
        if snake_direction == RIGHT:
            snake[0] = (snake[0][0] + game_block, snake[0][1])
        if snake_direction == DOWN:
            snake[0] = (snake[0][0], snake[0][1] + game_block)
        if snake_direction == LEFT:
            snake[0] = (snake[0][0] - game_block, snake[0][1])

        # create screen, lines and text
        screen.fill((0, 0, 0))
        for x in range(0, display_x, game_block):  # Draw vertical lines
            pygame.draw.line(screen, (40, 40, 40), (x, 0), (x, display_x))
        for y in range(0, display_y, game_block):  # Draw vertical lines
            pygame.draw.line(screen, (40, 40, 40), (0, y), (display_y, y))
        score_font = pygame.font.Font('OpenSans-Bold.ttf', 18).render(f'Score: {score}', True, (255, 255, 255))
        score_rect = score_font.get_rect()
        score_rect.topleft = (display_x - 120, 10)
        screen.blit(score_font, score_rect)

        # creates snake and apple
        screen.blit(apple, apple_pos)
        for pos in snake:
            screen.blit(snake_skin, pos)

        if game_over:
            break

        pygame.display.update()

    while game_over:
        game_over_text = pygame.font.Font('OpenSans-Bold.ttf', 75).render('Game Over', True, (255, 255, 255))
        game_over_restart = pygame.font.Font('OpenSans-Bold.ttf', 40).render('Press F5 to restart the game', True, (255, 255, 0))

        game_over_screen_rect = game_over_text.get_rect()
        game_over_screen_rect.midtop = (display_x / 2, 20)

        game_over_restart_rect = game_over_restart.get_rect()
        game_over_restart_rect.midtop = (display_y / 2, 300)

        screen.blit(game_over_text, game_over_screen_rect)
        screen.blit(game_over_restart, game_over_restart_rect)
        if event.type == KEYDOWN:
            if event.key == K_F5:
                game_over = False
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                exit()
        pygame.display.update()

    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()
