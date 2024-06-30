
local QBCore = exports["qb-core"]:GetCoreObject()

QBCore.Functions.CreateUseableItem("black_card", function(source, item)
    TriggerClientEvent("black_card:client:openUI", source)
end)