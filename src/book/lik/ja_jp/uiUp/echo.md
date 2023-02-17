## UI Echo

```lua
--[[
    カスタム Echo
]]

local kit = 'my_echo'

---@type UIKitClass
local this = UIKit(kit)

this:onSetup(function()

    ---@class noteLikEchoStage
    local stage = this:stage()

    --- ようき
    stage.main = FrameBackdrop(kit .. "->main", FrameGameUI)
        :adaptive(true)
        :relation(FRAME_ALIGN_LEFT, FrameGameUI, FRAME_ALIGN_LEFT, 0.01, 0.09)
        :size(0.1, 0.1)

    --- じょうほうベクター
    stage.textMax = 10
    ---@type FrameText[]
    stage.texts = {}
    for i = 1, stage.textMax do
        stage.texts[i] = FrameText(kit .. "->txt->" .. i, stage.main)
            :textAlign(TEXT_ALIGN_LEFT)
            :text('')
        if (i == 1) then
            stage.texts[i]:relation(FRAME_ALIGN_LEFT_TOP, stage.main, FRAME_ALIGN_LEFT_TOP, 0, 0):fontSize(11)
        elseif (i == 2) then
            stage.texts[i]:relation(FRAME_ALIGN_LEFT_TOP, stage.main, FRAME_ALIGN_LEFT_TOP, 0, -0.014):fontSize(9)
        else
            stage.texts[i]:relation(FRAME_ALIGN_LEFT_TOP, stage.main, FRAME_ALIGN_LEFT_TOP, 0, -0.002 - 0.012 * (i - 1)):fontSize(8)
        end
    end

    --- プレイヤーコンテンツの初期化
    for i = 1, BJ_MAX_PLAYERS, 1 do
        Player(i):prop(kit, {})
    end

    --- デフォルトechoの引き継ぎ
    echo = function(msg, whichPlayer, duration)
        if (isClass(whichPlayer, PlayerClass)) then
            async.call(whichPlayer, function()
                this:echo(msg, duration)
            end)
        else
            this:echo(msg, duration)
        end
    end
end)

---@param content string|string[]
---@param duration number|nil
function this:echo(content, duration)
    ---@type noteLikEchoStage
    local stage = self:stage()
    local p = PlayerLocal()
    async.call(p, function()
        local list = {}
        local prev = p:prop(kit)
        if (type(content) ~= "table") then
            content = { tostring(content) }
        end
        local dur = duration or 0
        for _, c in ipairs(content) do
            if (type(c) == "string") then
                dur = dur + 50 * mbstring.viewWidth(c)
            end
        end
        for _, c in ipairs(content) do
            if (type(c) == "string" and #list < stage.textMax) then
                table.insert(list, { t = c, a = 255, g = true, d = math.max(3, dur) })
            end
        end
        if (type(prev) == "table" and #prev > 0) then
            for _, c in ipairs(prev) do
                if (#list >= stage.textMax) then
                    if (isClass(c.ti, TimerClass)) then
                        destroy(c.ti)
                        c.ti = nil
                    end
                elseif (type(c.t) == "string") then
                    c.g = nil
                    c.a = c.a - 20
                    table.insert(list, c)
                end
            end
        end
        prev = nil
        p:prop(kit, list)
        stage.main:show(true)
        for j = 1, stage.textMax do
            if (j > #list) then
                stage.texts[j]:show(false)
            else
                local ld = list[j]
                if (isClass(ld.ti, TimerClass)) then
                    ld.d = ld.ti:remain()
                    destroy(ld.ti)
                    ld.ti = nil
                end
                stage.texts[j]:text(ld.t):alpha(ld.a)
                local grad
                if (ld.g == true) then
                    grad = { duration = 0.1, x = 0.01, alpha = 1 }
                else
                    grad = { duration = 0.1, y = 0.007 }
                end
                stage.texts[j]:gradient(grad, function(callFrame)
                    callFrame:show(true)
                    if (type(ld.d) == "number") then
                        ld.ti = time.setTimeout(ld.d, function()
                            ld.ti = nil
                            stage.texts[j]:gradient({ duration = 0.1, x = -0.004, alpha = -1 }, function(callFrame2)
                                callFrame2:show(false)
                                ld.t = nil
                            end)
                        end)
                    end
                end)
            end
        end
    end)
end
```
