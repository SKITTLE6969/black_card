

RegisterNUICallback('closeUI', function(data, cb)
    TriggerEvent('InteractSound_CL:PlayOnOne', 'FairyShort', 10.0)
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'BlackCard', open = false })
    cb('ok')
end)

RegisterNetEvent('black_card:client:openUI')
AddEventHandler('black_card:client:openUI', function()
    TriggerEvent('InteractSound_CL:PlayOnOne', 'FairyLong', 10.0)
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'BlackCard',
        open = true
    })
end)

---@@Testing Purpose 
-- RegisterCommand('openui', function()
--     SetNuiFocus(true, true)
--     SendNUIMessage({ action = 'BlackCard', open = true })
-- end, false)