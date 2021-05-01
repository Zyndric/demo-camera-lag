controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (update_game) {
        player_row += -1
        static_update()
    }
})
function game_update () {
	
}
function static_update () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(player_col, player_row))
    updateCamera()
    textSprite.setText("Camera position")
    textSprite.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (update_game) {
        player_col += -1
        static_update()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (update_game) {
        player_col += 1
        static_update()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (update_game) {
        player_row += 1
        static_update()
    }
})
function updateCamera () {
    game.currentScene().camera.update()
}
let textSprite: TextSprite = null
let mySprite: Sprite = null
let player_col = 0
let player_row = 0
let update_game = 0
let offsY = 0
let offsX = 0
update_game = 0
player_row = 0
player_col = 0
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
textSprite = textsprite.create("")
textSprite.setOutline(1, 12)
scene.cameraFollowSprite(mySprite)
static_update()
update_game = 1
game.onUpdate(function () {
    if (update_game) {
        game_update()
    }
})
