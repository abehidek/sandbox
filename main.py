import pygame
import random

from pygame.locals import *

display_x = 600
display_y = 600
pixel_size = 10

pygame.init()
screen = pygame.display.set_mode((600, 600))
pygame.display.set_caption('Snake')
while True:

    # helper functions
    def on_grid_random():
        x = random.randint(0, 590)
        y = random.randint(0, 590)
        return x // 10 * 10, y // 10 * 10


    def collision(c1, c2):
        return (c1[0] == c2[0]) and (c1[1] == c2[1])

    # definition for snake movement
    UP = 0
    RIGHT = 1
    DOWN = 2
    LEFT = 3

    snake = [(200, 200), (210, 200), (220, 200)]
    snake_skin = pygame.Surface((10, 10))
    snake_skin.fill((255, 255, 255))  # filling snake skin with white color

    apple_pos = on_grid_random()
    apple = pygame.Surface((10, 10))
    apple.fill((255, 0, 0))  # filling apple skin with red color

    my_direction = LEFT

    clock = pygame.time.Clock()

    score = 0
    game_over = False
    while not game_over:
        clock.tick(20)
        for event in pygame.event.get():

            if event.type == QUIT:
                pygame.quit()
                exit()

            if event.type == KEYDOWN:
                if event.key == K_UP and my_direction != DOWN:
                    my_direction = UP
                if event.key == K_RIGHT and my_direction != LEFT:
                    my_direction = RIGHT
                if event.key == K_DOWN and my_direction != UP:
                    my_direction = DOWN
                if event.key == K_LEFT and my_direction != RIGHT:
                    my_direction = LEFT

        if collision(snake[0], apple_pos):
            apple_pos = on_grid_random()
            snake.append((0, 0))
            score += 1

        # Check if snake collided with boundaries
        if snake[0][0] == 600 or snake[0][1] == 600 or snake[0][0] < 0 or snake[0][1] < 0:
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
        if my_direction == UP:
            snake[0] = (snake[0][0], snake[0][1] - 10)
        if my_direction == RIGHT:
            snake[0] = (snake[0][0] + 10, snake[0][1])
        if my_direction == DOWN:
            snake[0] = (snake[0][0], snake[0][1] + 10)
        if my_direction == LEFT:
            snake[0] = (snake[0][0] - 10, snake[0][1])

        screen.fill((0, 0, 0))
        for x in range(0, 600, 10):  # Draw vertical lines
            pygame.draw.line(screen, (40, 40, 40), (x, 0), (x, 600))
        for y in range(0, 600, 10):  # Draw vertical lines
            pygame.draw.line(screen, (40, 40, 40), (0, y), (600, y))

        score_font = pygame.font.Font('OpenSans-Bold.ttf', 18).render(f'Score: {score}', True, (255, 255, 255))
        score_rect = score_font.get_rect()
        score_rect.topleft = (600 - 120, 10)
        screen.blit(score_font, score_rect)

        screen.blit(apple, apple_pos)

        for pos in snake:
            screen.blit(snake_skin, pos)

        if game_over:
            break

        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                exit()
        pygame.display.update()

    while game_over:
        game_over_text = pygame.font.Font('OpenSans-Bold.ttf', 75).render('Game Over', True, (255, 255, 255))
        game_over_restart = pygame.font.Font('OpenSans-Bold.ttf', 40).render('Press F5 to restart the game', True, (255, 255, 0))

        game_over_screen_rect = game_over_text.get_rect()
        game_over_screen_rect.midtop = (600 / 2, 20)

        game_over_restart_rect = game_over_restart.get_rect()
        game_over_restart_rect.midtop = (600 / 2, 300)

        screen.blit(game_over_text, game_over_screen_rect)
        screen.blit(game_over_restart, game_over_restart_rect)
        if event.type == KEYDOWN:
            if event.key == K_F5 :
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
